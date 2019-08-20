import React from 'react';
import Serverless from 'serverless';
import {render, Box, Static, TestResults} from 'ink';

const funcs = [
	{ title: "function 1", id: 1},
	{ title: "function 2", id: 2},
	{ title: "function 3", id: 3},
]

const serverless = new Serverless();

 //https://github.com/serverless/serverless/blob/710139eee97fff5f0f98839521579d1fb65cba0a/lib/utils/getServerlessConfigFile.js
const Demo = () => {
	serverless.processedInput = { commands: ["logs"], options: {
		"config": "./lambda1/serverless.yml",
	} };
	JSON.stringify(serverless.init())
	// serverless.cli = new CLI(serverless);
    //   serverless.processedInput = { commands: [], options: {} };
	JSON.stringify(serverless.run("logs -f hello"))
	return (
		<>
			<Static>
				{funcs.map(func => (
					func.title
				))}
			</Static>
		</>
	)
};

render(<Demo/>);
