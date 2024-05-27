const getgit = async (owner, repo, path) => {
  const { sha } = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`).then((res) => res.json());
  const { content } = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/blobs/${sha}`).then((blob) => blob.json());
  const data = await JSON.parse(atob(content));
  console.log(data);
};
// the repo "ibmiWork" has been deleted
getgit("Astalsi401", "ibmiWork", "test/test.json"); // output: { a: 0, b: [ 'a', 'b' ] }
