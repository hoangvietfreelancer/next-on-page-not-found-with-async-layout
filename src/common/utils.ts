export const getData = async () => {
  const response = await fetch(`https://example.com`, {
    method: "GET",
    next: { revalidate: 0 },
  });
  if (!response.ok) {
    return Promise.reject(new Error("Failed to fetch"));
  }

  return response.text();
};
