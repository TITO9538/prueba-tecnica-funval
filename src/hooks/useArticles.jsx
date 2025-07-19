import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useArticles() {
  const [arts, setArts] = useState([]);
  const [artsM, setArtsM] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const res = await axios.get("/data/sample.json");
      const data = res.data;

      if (data.entries) {
        const filtered = data.entries
          .filter((entry) => entry.programType === "series" && entry.releaseYear >= 2010)
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 20);

        setArts(filtered);
      }
    } catch (error) {
      console.error("Error al cargar las series:", error);
    }
  }

  async function fetchDataM() {
    try {
      const res = await axios.get("/data/sample.json");
      const data = res.data;

      if (data.entries) {
        const filtered = data.entries
          .filter((entry) => entry.programType === "movie" && entry.releaseYear >= 2010)
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 20);

        setArtsM(filtered);
      }
    } catch (error) {
      console.error("Error al cargar las series:", error);
    }
  }

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetchDataM();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return {
    arts,
    isLoading,
    artsM,
  };
}
