// src/EgeCalculator.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

const subjects = [
  { label: 'Математика', name: 'math' },
  { label: 'Русский язык', name: 'russian' },
  { label: 'Физика', name: 'physics' },
  { label: 'Информатика', name: 'informatics' },
  { label: 'Химия', name: 'chemistry' },
  { label: 'Биология', name: 'biology' },
  { label: 'История', name: 'history' },
  { label: 'География', name: 'geography' },
  { label: 'Обществознание', name: 'socialStudies' },
  { label: 'Литература', name: 'literature' },
  { label: 'Английский язык', name: 'english' },
  { label: 'Композиция', name: 'composition' },
  { label: 'Рисунок', name: 'picture' },
];

const faculties = [
  {
    name: 'Картография и геоинформатика',
    requiredScores: { math: 39, russian: 40, informatics: 44, geography: 40 },
  },
  {
    name: 'Экология и природопользование',
    requiredScores: { math: 39, russian: 40, informatics: 44, geography: 40 },
    byChoice: ['math', 'informatics'],
  },
  { name: 'Архитектура', requiredScores: { math: 39, russian: 40, picture: 40, composition: 40 } },
  {
    name: 'Дизайн архитектурной среды',
    requiredScores: { math: 39, russian: 40, picture: 40, composition: 40 },
  },
  { name: 'Строительство', requiredScores: { math: 39, russian: 40, chemistry: 39, physics: 39 } },
  {
    name: 'Строительство уникальных зданий и сооружений',
    requiredScores: { math: 39, russian: 40, physics: 39 },
  },
  {
    name: 'Информатика и вычислительная техника',
    requiredScores: { math: 39, russian: 40, informatics: 44, physics: 39 },
  },
  {
    name: 'Информационные системы и технологии',
    requiredScores: { math: 39, russian: 40, informatics: 44 },
  },
  { name: 'Прикладная информатика', requiredScores: { math: 39, russian: 40, informatics: 44 } },
  {
    name: 'Инфокоммуникационные технологии и системы связи',
    requiredScores: { math: 39, russian: 40, informatics: 44, physics: 39 },
  },
  // Add more faculties as needed
];

const getIsByChoiceSubjectPassed = (
  faculty: (typeof faculties)[number],
  scores: Record<string, string>
) => {
  const passedByChoiceSubjects: string[] = [];

  faculty.byChoice?.forEach((subject) => {
    const score = Number(scores[subject] || 0);
    if (score >= faculty.requiredScores[subject]) {
      passedByChoiceSubjects.push(subject);
    }
  });

  return passedByChoiceSubjects.length > 0;
};

const EgeCalculator = () => {
  const [scores, setScores] = useState({});
  const [totalScore, setTotalScore] = useState(null);
  const [eligibleFaculties, setEligibleFaculties] = useState([]);

  const handleChange = (event) => {
    setScores({
      ...scores,
      [event.target.name]: event.target.value,
    });
  };

  const calculateTotal = () => {
    const total = Object.values(scores).reduce((sum, score) => sum + Number(score), 0);
    setTotalScore(total);

    const eligible = faculties.filter((faculty) => {
      let requiredScores = Object.entries(faculty.requiredScores);
      const isByChoiceSubjectPassed = getIsByChoiceSubjectPassed(faculty, scores);

      if (isByChoiceSubjectPassed) {
        requiredScores = requiredScores.filter(([subject]) => !faculty.byChoice?.includes(subject));
      }

      return requiredScores.every(
        ([subject, requiredScore]) => Number(scores[subject] || 0) >= requiredScore
      );
    });

    setEligibleFaculties(eligible);
  };

  return (
    <Box p={3}>
      <Typography variant='h4' gutterBottom>
        Калькулятор ЕГЭ
      </Typography>
      <Grid container spacing={2}>
        {subjects.map((subject) => (
          <Grid item xs={12} sm={6} md={4} key={subject.name}>
            <TextField
              label={subject.label}
              name={subject.name}
              type='number'
              variant='outlined'
              fullWidth
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#962237',
                  },
                  '&:hover fieldset': {
                    borderColor: '#751829',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#962237',
                  },
                  color: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white',
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display='flex' justifyContent='center'>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#962237',
            '&:hover': { backgroundColor: '#751829' },
            color: 'white',
          }}
          onClick={calculateTotal}
        >
          Рассчитать общий балл
        </Button>
      </Box>
      {totalScore !== null && (
        <Box mt={3}>
          <Typography variant='h6'>Общий балл: {totalScore}</Typography>
          <Typography variant='h6'>Вы можете поступить в следующие факультеты:</Typography>
          <ul>
            {eligibleFaculties.map((faculty, index) => (
              <li key={index}>{faculty.name}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default EgeCalculator;

//

// // src/EgeCalculator.js
// import React, { useState } from 'react';
// import { Box, TextField, Button, Typography, Grid, MenuItem } from '@mui/material';

// const subjects = [
//   { label: "Математика", name: "math" },
//   { label: "Русский язык", name: "russian" },
//   { label: "Физика", name: "physics" },
//   { label: "Информатика", name: "informatics" },
//   { label: "Химия", name: "chemistry" },
//   { label: "Биология", name: "biology" },
//   { label: "История", name: "history" },
//   { label: "География", name: "geography" },
//   { label: "Обществознание", name: "socialStudies" },
//   { label: "Литература", name: "literature" },
//   { label: "Английский язык", name: "english" }
// ];

// const faculties = [
//   { name: "Факультет информационных технологий", requiredScores: { math: 60, russian: 50, informatics: 70 } },
//   { name: "Факультет химии", requiredScores: { math: 50, russian: 50, chemistry: 65 } },
//   { name: "Факультет биологии", requiredScores: { math: 50, russian: 50, biology: 60 } },

// ];

// const EgeCalculator = () => {
//   const [scores, setScores] = useState({});
//   const [totalScore, setTotalScore] = useState(null);
//   const [eligibleFaculties, setEligibleFaculties] = useState([]);

//   const handleChange = (event) => {
//     setScores({
//       ...scores,
//       [event.target.name]: event.target.value
//     });
//   };

//   const calculateTotal = () => {
//     const total = Object.values(scores).reduce((sum, score) => sum + Number(score), 0);
//     setTotalScore(total);

//     const eligible = faculties.filter(faculty => {
//       return Object.keys(faculty.requiredScores).every(subject =>
//         scores[subject] && Number(scores[subject]) >= faculty.requiredScores[subject]
//       );
//     });

//     setEligibleFaculties(eligible);
//   };

//   return (
//     <Box p={3}>
//       <Typography  variant="h4" gutterBottom>Калькулятор ЕГЭ</Typography>
//       <Grid container spacing={2}>
//         {subjects.map((subject) => (
//           <Grid item xs={12} sm={6} md={4} key={subject.name}>
//             <TextField
//               label={subject.label}
//               name={subject.name}
//               type="number"
//               variant="outlined"
//               fullWidth
//               onChange={handleChange}
//             />
//           </Grid>
//         ))}
//       </Grid>
//       <Box mt={3} display="flex" justifyContent="center">
//         <Button variant="contained" color="primary" onClick={calculateTotal}>
//           Рассчитать общий балл
//         </Button>
//       </Box>
//       {totalScore !== null && (
//         <Box mt={3}>
//           <Typography variant="h6">Общий балл: {totalScore}</Typography>
//           <Typography variant="h6">Вы можете поступить в следующие факультеты:</Typography>
//           <ul>
//             {eligibleFaculties.map((faculty, index) => (
//               <li key={index}>{faculty.name}</li>
//             ))}
//           </ul>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default EgeCalculator;
