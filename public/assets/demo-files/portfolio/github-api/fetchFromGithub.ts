const gitApi = async (url: string, signal: AbortSignal) => {
  const [, , , owner, repo, , , ...pathStr] = url.split("/");
  const path = pathStr.join("/");
  const { sha } = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, { signal }).then((res) => res.json());
  const { content } = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/blobs/${sha}`, { signal }).then((blob) => blob.json());
  return atob(content);
};
