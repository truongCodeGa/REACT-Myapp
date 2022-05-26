import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import GameWithReducer from "../tictactoe/GameWithReducer";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-5 bg-red-100">
      <p className="text-red-600">Không thể lấy data. Component đang lỗi</p>
      {/* <pre>{error.message}</pre> */}
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
const ReactErrorBoundary = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GameWithReducer></GameWithReducer>
      </ErrorBoundary>
    </div>
  );
};

export default ReactErrorBoundary;
// hiển thị lỗi riêng component các component ko lỗi sẽ hiển thị và sử dụng như bình thường
