import { Preorder } from "../components/columns"; // Adjust the path as needed

export async function fetchData(
  url: string,
  setter: React.Dispatch<React.SetStateAction<Preorder[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const fetchedData: Preorder[] = await response.json();
    setter(fetchedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
}