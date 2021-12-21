import React from 'react';
import Terminal from 'terminal-in-react';

export default function Generator() {
    return (
        <div>
            <h1 style={{paddingTop: 100}}>Generator</h1>
            <Terminal
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em" }}
                commands={{
                    'open-google': () => window.open('https://www.google.com/', '_blank'),
                    'log': () => console.log(window),
                    // showmsg: this.showMsg,
                    popup: () => alert('Terminal in React')
                }}
                descriptions={{
                    'open-google': 'opens google.com',
                    showmsg: 'shows a message',
                    alert: 'alert', popup: 'alert'
                }}
                msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
            />
        </div>
    )
};