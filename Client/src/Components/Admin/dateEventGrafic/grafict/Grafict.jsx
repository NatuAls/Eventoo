import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosModeCategories } from "../../../../Slice/Filter/categorieSlice";
import { getAllEvents } from "../../../../Slice/Admin/AdminSlice";
import Pie from "./Pie/Pie";
import StackedBarChart from "./Table/TableStadistic";

const chartContainerStyle = {
  display: "grid",
  gap: "50px",
  alignItems: "center",
  marginTop: "3rem",
  height: "100%",
  width: "100%",
  justifyContent: "center",
};

const titleStyle = {
  fontSize: "3rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "var(--accent-color)",
  letterSpacing: "2px",
  lineHeight: "1.2",
  marginBottom: "30px",
  paddingBottom: "10px",
  borderBottom: "1px solid #ddd",
};

function Grafict() {
  const categories = useSelector(
    (state) => state.categories.categories.categories
  );
  const { events } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState(null);
  const [modality, setModality] = useState(null);
  useEffect(() => {
    dispatch(axiosModeCategories());
    dispatch(getAllEvents());
  }, [dispatch]);
  useEffect(() => {
    if (events.length && categories.length) {
      const data = categories
        .map((category) => {
          const results = events.filter((event) =>
            JSON.stringify(event).includes(category.name)
          );
          const value = results.length;
          const id =
            category.name !== "Congresses"
              ? category.name
              : category.modality === "Presential"
              ? "Congresses Presential"
              : "congresses Virtual"; // Agrega un prefijo único
          return value === 0
            ? null
            : {
                id: id,
                label: category.name,
                value: value,
              };
        })
        .filter((category) => category !== null)
        .sort((a, b) => b.value - a.value);
      setChartData(data);
    }
    if (events.length && categories.length) {
      const resultsP = events.filter(
        (event) => event.category && event.category.modality === "Presential"
      );
      
      const resultsv = events.filter(
        (event) => event.category && event.category.modality === "Virtual"
      );
    
      setModality([
        { id: "Presential", label: "Presential", value: resultsP.length },
        { id: "Virtual", label: "Virtual", value: resultsv.length },
      ]);
    }
  }, [events, categories]);


  return (
    <div style={chartContainerStyle}>
      <h2 style={titleStyle}>Events for Category</h2>
      <Pie data={chartData} />
      <h2 style={titleStyle}>Events for Modality</h2>
      <Pie data={modality}  />
      <h2 style={titleStyle}>Events sold in the year</h2>
      <StackedBarChart />
    </div>
  );
}

export default Grafict;
