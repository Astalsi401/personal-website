const gitApi = async (url: string, signal: AbortSignal) => {
  const info = url.split("/");
  const [owner, repo] = info.slice(3, 5);
  const path = info.slice(7, info.length).join("/");
  const { sha } = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, { signal }).then((res) => res.json());
  const { content } = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/blobs/${sha}`, { signal }).then((blob) => blob.json());
  return atob(content);
};
