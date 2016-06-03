#Readline Standard In (rl-stdin)#

***A simple module to read stdin data and resolve the result in a promise***

```
# Use as inline command like
node -p 'require(\'rl-stdin\').then((data) => {/*Do Something Fancy*/});'

# Use inside node script
var stdin = require('rl-stdin');
stdin.then((data) => {/*Do Something Fancy*/});

```