/**
 * Created by scott on 16-3-31.
 */
'use strict'

module.exports = {
	register
}

/**
 *
 * @param {Command} cmd
 * @param {function(Object)} optionsCallback
 */
function register(cmd, optionsCallback) {
	cmd
		.description('run a program on the target release dir')
		.arguments('<dir>')
		.usage('<dir> [options]')
		.option('--no-browse', 'open the browser automatically')
		.option('--https', 'use https protocol to serve the resources')
		.action(function (dir) {
			optionsCallback(Object.assign({ dir: dir }, this.opts()))
		})
}