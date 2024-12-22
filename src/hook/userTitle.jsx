// src/hooks/useTitle.jsx
import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Service Review`;
    }, [title])
};

export default useTitle;