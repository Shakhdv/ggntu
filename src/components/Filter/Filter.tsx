import React, { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import { Slider, Typography, Box } from "@mui/material";
import Pagination from "./Pagination";
import { log } from "console";

const programs = [
  {
    name: "Бурение нефтяных и газовых скважин",
    level: "БАКАЛАВРИАТ",
    institute: "ING",
    form: "очно",
    price: 127739,
  },
  {
    name: "Нефтегазовое дело",
    level: "БАКАЛАВРИАТ",
    institute: "IPIT",
    form: "очно",
    price: 127739,
  },
  {
    name: "ce",
    level: "БАКАЛАВРИАТ",
    institute: "ING",
    form: "заочно",
    price: 50000,
  },
  {
    name: "ce",
    level: "МАГИСТРАТУРА",
    institute: "ING",
    form: "заочно",
    price: 50000,
  },
  {
    name: "ce",
    level: "МАГИСТРАТУРА",
    institute: "ING",
    form: "очно",
    price: 50000,
  },
  {
    name: "ce",
    level: "МАГИСТРАТУРА",
    institute: "ING",
    form: "очно-заочно",
    price: 50000,
  },
  {
    name: "ce",
    level: "МАГИСТРАТУРА",
    institute: "ING",
    form: "очно-заочно",
    price: 50000,
  },
  {
    name: "ce",
    level: "МАГИСТРАТУРА",
    institute: "ING",
    form: "очно-заочно",
    price: 50000,
  },
  // Add more programs as needed
];

const EducationPrograms = () => {
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("Все");
  const [formFilter, setFormFilter] = useState("Все");
  const [institute, setInstituteFilter] = useState("Все");
  const [priceRange, setPriceRange] = useState([44500, 146000]);
  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  const [currentPage, setCurrentPage] = useState(1);
  const programsPerPage = 5;

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const filterPrograms = () => {
    const result = programs.filter((program) => {
      const isPriceInRange =
        program.price >= priceRange[0] && program.price <= priceRange[1];
      const isLevelMatching =
        levelFilter === "Все" || program.level === levelFilter;
      const isFormMatching = formFilter === "Все" || program.form == formFilter;
      const isInstituteMatching =
        institute === "Все" || program.institute === institute;
      const isNameMatching = program.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        isPriceInRange &&
        isLevelMatching &&
        isFormMatching &&
        isInstituteMatching &&
        isNameMatching
      );
    });
    setFilteredPrograms(result);
  };

  useEffect(() => {
    filterPrograms();
  }, [search, levelFilter, formFilter, institute, priceRange]);

  const indexOfLastProgram = currentPage * programsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
  const currentPrograms = filteredPrograms.slice(
    indexOfFirstProgram,
    indexOfLastProgram
  );

  const totalPages = Math.ceil(filteredPrograms.length / programsPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>УРОВЕНЬ ОБРАЗОВАНИЯ</h2>
        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
        >
          <option value="Все">Все уровни</option>
          <option value="БАКАЛАВРИАТ">БАКАЛАВРИАТ</option>
          <option value="МАГИСТРАТУРА">МАГИСТРАТУРА</option>
          <option value="СПЕЦИАЛИТЕТ">СПЕЦИАЛИТЕТ</option>
          <option value="АСПИРАНТУРА">АСПИРАНТУРА</option>
          <option value="СПО">СПО</option>
        </select>
        <h2>ИНСТИТУТ</h2>
        <select
          value={institute}
          onChange={(e) => setInstituteFilter(e.target.value)}
        >
          <option value="Все">Все</option>
          <option value="IPIT">
            Институт прикладных информационных технологий
          </option>
          <option value="ING">Институт нефти и газа</option>
          <option value="ISAD">
            Институт строительства, архитектуры и дизайна
          </option>
          <option value="ICETP">
            Институт цифровой экономики и технологического предпринимательства
          </option>
          <option value="IE">Институт энергетики</option>
          <option value="FSPO">
            Факультет среднего профессионального образования
          </option>
          <option value="IPCPK">
            Институт повышения квалификации и переподготовки кадров
          </option>
          <option value="Lyceum">Лицей ГГНТУ</option>
        </select>
        <h2>ФОРМА ОБУЧЕНИЯ</h2>
        <select
          value={formFilter}
          onChange={(e) => setFormFilter(e.target.value)}
        >
          <option value="Все">Все формы обучения</option>
          <option value="очно">очно</option>
          <option value="очно-заочно">очно-заочно</option>
          <option value="заочно">заочно</option>
        </select>

        <Box p={3}>
          <Typography variant="h6" className={styles.price} gutterBottom>
            Стоимость обучения
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={44500}
            max={146000}
          />
          <Box display="flex" justifyContent="space-between">
            <Typography>{priceRange[0]}</Typography>
            <Typography>{priceRange[1]}</Typography>
          </Box>
        </Box>
      </div>

      <div className={styles.right}>
        <div>
          <input
            className={styles.search}
            type="text"
            placeholder="Поиск образовательной программы"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className={styles.under}>
            <div>Образовательная программа</div>
            <div>Уровень образования</div>
            <div>Стоимость обучения</div>
          </div>
          <ul>
            {currentPrograms.map((program, index) => (
              <li key={index} className={styles.card}>
                <h2>{program.name}</h2>
                <p className={styles.level}>{program.level}</p>
                {/* <p>{program.institute}</p> */}
                {/* <p>{program.form}</p> */}
                <p>{program.price} руб.</p>
              </li>
            ))}
          </ul>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default EducationPrograms;

// import React, { useState, useEffect } from "react";
// import styles from "./Filter.module.css";
// import {
//   Slider,
//   Typography,
//   Box,
// } from "@mui/material";

// const programs = [
//   {
//     name: "Бурение нефтяных и газовых скважин",
//     level: "БАКАЛАВРИАТ",
//     institute: "ING",
//     form: "очно",
//     price: 127739,
//   },
//   {
//     name: "Нефтегазовое дело",
//     level: "БАКАЛАВРИАТ",
//     institute: "IPIT",
//     form: "очно",
//     price: 127739,
//   },
//   {
//     name: "ce",
//     level: "МАГИСТРАТУРА",
//     institute: "ING",
//     form: "очно-заочно",
//     price: 50000,
//   },
// ];

// const EducationPrograms = () => {
//   const [search, setSearch] = useState("");
//   const [levelFilter, setLevelFilter] = useState("Все");
//   const [formFilter, setFormFilter] = useState("Все");
//   const [institute, setInstituteFilter] = useState("Все");
//   const [priceRange, setPriceRange] = useState([44500, 146000]);
//   const [filteredPrograms, setFilteredPrograms] = useState(programs);

//   const handlePriceChange = (event, newValue) => {
//     setPriceRange(newValue);
//   };

//   const filterPrograms = () => {
//     const result = programs.filter((program) => {
//       const isPriceInRange = program.price >= priceRange[0] && program.price <= priceRange[1];
//       const isLevelMatching = levelFilter === "Все" || program.level === levelFilter;
//       const isFormMatching = formFilter === "Все" || program.form === formFilter;
//       const isInstituteMatching = institute === "Все" || program.institute === institute;
//       const isNameMatching = program.name.toLowerCase().includes(search.toLowerCase());

//       return isPriceInRange && isLevelMatching && isFormMatching && isInstituteMatching && isNameMatching;
//     });
//     setFilteredPrograms(result);
//   };

//   useEffect(() => {
//     filterPrograms();
//   }, [search, levelFilter, formFilter, institute, priceRange]);

//   return (
//     <div className={styles.container}>
//       <div className={styles.left}>
//         <select
//           value={levelFilter}
//           onChange={(e) => setLevelFilter(e.target.value)}
//         >
//           <option value="Все">Все уровни</option>
//           <option value="БАКАЛАВРИАТ">БАКАЛАВРИАТ</option>
//           <option value="МАГИСТРАТУРА">МАГИСТРАТУРА</option>
//           <option value="СПЕЦИАЛИТЕТ">СПЕЦИАЛИТЕТ</option>
//           <option value="АСПИРАНТУРА">АСПИРАНТУРА</option>
//           <option value="СПО">СПО</option>
//         </select>
//         <select
//           value={institute}
//           onChange={(e) => setInstituteFilter(e.target.value)}
//         >
//           <option value="Все">Все</option>
//           <option value="IPIT">Институт прикладных информационных технологий</option>
//           <option value="ING">Институт нефти и газа</option>
//           <option value="ISAD">Институт строительства, архитектуры и дизайна</option>
//           <option value="ICETP">Институт цифровой экономики и технологического предпринимательства</option>
//           <option value="IE">Институт энергетики</option>
//           <option value="FSPO">Факультет среднего профессионального образования</option>
//           <option value="IPCPK">Институт повышения квалификации и переподготовки кадров</option>
//           <option value="Lyceum">Лицей ГГНТУ</option>
//         </select>
//         <select
//           value={formFilter}
//           onChange={(e) => setFormFilter(e.target.value)}
//         >
//           <option value="Все">Все формы обучения</option>
//           <option value="очно">очно</option>
//           <option value="очно-заочно">очно-заочно</option>
//           <option value="заочно">заочно</option>
//         </select>

//         <Box p={3}>
//           <Typography variant="h6" gutterBottom>
//             Стоимость обучения
//           </Typography>
//           <Slider
//             value={priceRange}
//             onChange={handlePriceChange}
//             valueLabelDisplay="auto"
//             min={44500}
//             max={146000}
//           />
//           <Box display="flex" justifyContent="space-between">
//             <Typography>{priceRange[0]}</Typography>
//             <Typography>{priceRange[1]}</Typography>
//           </Box>
//         </Box>
//       </div>

//       <div className={styles.right}>
//         <input
//          className={styles.search}
//           type="text"
//           placeholder="Поиск..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <ul>
//           {filteredPrograms.map((program, index) => (
//             <li key={index} className={styles.card}>
//               <h2>{program.name}</h2>
//               <p>Уровень: {program.level}</p>
//               <p>Институт: {program.institute}</p>
//               <p>Форма обучения: {program.form}</p>
//               <p>Стоимость: {program.price} руб.</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default EducationPrograms;
