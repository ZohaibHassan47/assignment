import React from 'react';
import {initializeBlock, useBase} from '@airtable/blocks/ui';
function TodoExtension() {
    const base = useBase();
    return <div>hello</div>;
}
initializeBlock(() => <TodoExtension />);