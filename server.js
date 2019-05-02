const githubhook = require('githubhook');
const github = githubhook({
	host: '119.81.124.218',
	port: '22',
    secret: 'secret',
});

github.listen();

github.on('*', function (event, repo, ref, data) {
    console.log('event========',event);
	console.log('repo========',repo);
	console.log('ref========', ref);
	console.log('data========', repo);
});

/*
github.on('event', function (repo, ref, data) {
});

github.on('event:reponame', function (ref, data) {
});

github.on('event:reponame:ref', function (data) {
});

github.on('reponame', function (event, ref, data) {
});

github.on('reponame:ref', function (event, data) {
});

// GitLab system hooks
github.on('*', function (event, type, data) {
});

github.on('type', function (event, data) {
});

// if you'd like to programmatically stop listening
// github.stop();
*/