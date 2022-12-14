import { useContext } from "react";
import { ScrollView } from "react-native";
import { HistoryContext } from "../../contexts/historyContext";
import { SearchResult } from "../SearchResult";

export default function SearchHistory() {
  const { history } = useContext(HistoryContext);

  return (
    <ScrollView
      style={{ width: "100%" }}
      contentContainerStyle={{ display: "flex", alignItems: "center" }}
    >
      {history.map((user, index) => (
        <SearchResult
          key={index}
          profile={user}
          isLoading={false}
          setIsLoading={() => {
            return;
          }}
        />
      ))}
    </ScrollView>
  );
}
