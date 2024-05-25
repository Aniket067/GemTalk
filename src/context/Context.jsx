import { createContext, useState, useEffect } from "react";
import run from "../config/gemini";
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; // You can choose other styles

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    useEffect(() => {
        if (showResult) {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        }
    }, [resultData, showResult]);

    const isCodeBlock = (text) => {
        return text.includes("```");
    };

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);

        let response = prompt !== undefined ? await run(prompt) : await run(input);
        if (prompt !== undefined) {
            setRecentPrompt(prompt);
            setPrevPrompts(prev => [...prev, prompt]);
        } else {
            setRecentPrompt(input);
            setPrevPrompts(prev => [...prev, input]);
        }

        let formattedResponse = "";
        if (isCodeBlock(response)) {
            const codeSections = response.split(/```/g);
            let inCode = false;
            codeSections.forEach((section, index) => {
                if (inCode) {
                    formattedResponse += `<pre><code class="language-${getCodeLanguage(section)}">${escapeHtml(section)}</code></pre>`;
                    inCode = false;
                } else {
                    formattedResponse += formatText(section);
                    inCode = true;
                }
            });
        } else {
            formattedResponse = formatText(response);
        }

        setResultData(formattedResponse);
        setLoading(false);
        setInput("");
    };

    const escapeHtml = (unsafe) => {
        return unsafe.replace(/&/g, "&amp;")
                     .replace(/</g, "&lt;")
                     .replace(/>/g, "&gt;")
                     .replace(/"/g, "&quot;")
                     .replace(/'/g, "&#039;");
    };

    const getCodeLanguage = (codeSection) => {
        if (codeSection.includes("#include") || codeSection.includes("int main")) {
            return "cpp";
        } else if (codeSection.includes("function") || codeSection.includes("console.log")) {
            return "javascript";
        }
        return "plaintext";  // Default language
    };

    const formatText = (text) => {
        let formattedText = text.split("**").map((part, index) => index % 2 ? `<b>${part}</b>` : part).join("");
        formattedText = formattedText.split("##").map((part, index) => index % 2 ? `<h2>${part}</h2>` : part).join("");
        formattedText = formattedText.split("*").join("<br/>");
        formattedText = formattedText.split(/(\d+\.\s|\-\s)/).map((part, index, array) => {
            if (index % 2 === 0) return part;
            else return `<br/>${part}${array[index + 1]}`;
        }).join("");
        formattedText = formattedText.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
        return formattedText;
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat: () => {
            setLoading(false);
            setShowResult(false);
        }
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
