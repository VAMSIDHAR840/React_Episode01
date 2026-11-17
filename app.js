const parent = React.createElement('div', { id: 'parent' }, 
    [React.createElement('div', { id: 'child' } , 
        [React.createElement('h1',{},'I am H1 tag'),
            React.createElement('h3',{},'I am H3 tag')
        ]
    ),React.createElement('div', { id: 'child1' } , 
        [React.createElement('h2',{},'I am H2 tag'),
            React.createElement('h6',{},'I am h6 element')
        ]
    )])




const heading = React.createElement('h3', { id: "heading" }, "Hello World form react");

const root = ReactDOM.createRoot(document.getElementById('rootx'));

root.render(parent); 