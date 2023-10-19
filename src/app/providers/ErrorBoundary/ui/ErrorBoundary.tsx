import { types } from 'sass';
import React, { ErrorInfo } from 'react';
import Error = types.Error;

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState{
hasError: boolean;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props : ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error : Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error : Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            // eslint-disable-next-line i18next/no-literal-string
            return <h1>Something went wrong.</h1>;
        }

        return children;
    }
}
export default ErrorBoundary;
