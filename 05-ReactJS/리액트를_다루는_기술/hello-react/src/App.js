import React from 'react';
import IterationSample from "./components/IterationSample";

const App = () => {
    const scrollBoxRef = React.useRef();

    return (
        <div>
            <IterationSample />
        </div>
    );
};

export default App;
