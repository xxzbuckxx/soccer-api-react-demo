import React, { Component } from "react";

function WithListLoading(Component: JSX.Element) {
  return function WihLoadingComponent({ isLoading, ...props }: {isLoading: boolean, repos: any}) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default WithListLoading;
