import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
  mcButton,
  mcGridContainer,
  mcGridItemBoxTypo,
  mcGridItemImage,
  mcGridItemImageBox,
  mcGridItemImageOverlay,
  mcGridItemInnerBox,
  mcGridItemLogoImage,
  mcGridItemMovie,
  mcGridItemSearch,
  mcImageText,
  mcOuterBox,
  mcTitleTypo,
  mcTypo,
} from '../../css/MovieStyles';

const movie = [
  {
    title: '오펜하이머',
    ageRating: '15세',
    reservationRate: 56.9,
    releaseDate: '2023-08-15',
    summaryTitle: '"나는 이제 죽음이요, 세상의 파괴자가 되었다."',
    summaryContents:
      '세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트.',
  },
  {
    title: '콘크리트유토피아',
    ageRating: '15세',
    reservationRate: 12.7,
    releaseDate: '2023-08-09',
    summaryTitle: '"아파트는 주민의 것"',
    summaryContents:
      '온 세상을 집어삼킨 대지진, 그리고 하루아침에 폐허가 된 서울. 모든 것이 무너졌지만 오직 황궁 아파트만은 그대로다.',
  },
  {
    title: '메가로돈2',
    ageRating: '15세',
    reservationRate: 10.1,
    releaseDate: '2023-08-15',
    summaryTitle: '"더 거대해진 메가로돈 VS 더 강력해진 제이슨 스타뎀"',
    summaryContents:
      '지구 역사상 가장 거대한 최상위 포식자 ‘메가로돈’과 목숨 건 사투 끝에 살아남은 다이버 ‘조나스’는 해양 연구소의 팀원들과 함께 심해 탐사에 나서던 중 예기치 못한 사고로 해저 7,620m에 고립되고 만다.',
  },
  {
    title: '밀수',
    ageRating: '15세',
    reservationRate: 4.1,
    releaseDate: '2023-07-26',
    summaryTitle: '"열길 물속은 알아도 한길 사람 속은 모른다!"',
    summaryContents:
      '평화롭던 바닷가 마을 군천에 화학 공장이 들어서면서 하루아침에 일자리를 잃은 해녀들. 먹고 살기 위한 방법을 찾던 승부사 "춘자"(김혜수)는 바다 속에 던진 물건을 건져 올리기만 하면 큰돈을 벌 수 있다는',
  },
];

export const MovieChart = () => {
  const [isHovered, setIsHovered] = useState([]);

  useEffect(() => {
    const initialHoverState = movie.map(() => ({ hovered: false }));
    setIsHovered(initialHoverState);
  }, []);

  const handleOnMouseEnter = (index) => {
    setIsHovered((prevIsHovered) => {
      const updatedHovered = [...prevIsHovered];
      updatedHovered[index] = { hovered: true };
      return updatedHovered;
    });
  };

  const handleOnMouseLeave = (index) => {
    setIsHovered((prevIsHovered) => {
      const updatedHovered = [...prevIsHovered];
      updatedHovered[index] = { hovered: false };
      return updatedHovered;
    });
  };

  return (
    <>
      <Box sx={mcOuterBox}>
        <Grid container sx={mcGridContainer}>
          <Grid item xs={12} sm={12} sx={mcGridItemSearch}></Grid>
          {movie.map((item, index) => (
            <Grid item xs={12} sm={3} sx={mcGridItemMovie} key={index}>
              <Box
                sx={mcGridItemImageBox}
                onMouseEnter={() => handleOnMouseEnter(index)}
                onMouseLeave={() => handleOnMouseLeave(index)}
              >
                {isHovered[index]?.hovered === true ? (
                  <>
                    <img
                      src={`/images/main_image_0${index + 1}.jpg`}
                      alt={movie[index].title}
                      style={mcGridItemImageOverlay}
                    />
                    <Typography sx={mcImageText}>
                      {movie[index].summaryTitle}
                      <br />
                      <br />
                      {movie[index].summaryContents}
                    </Typography>
                  </>
                ) : (
                  <img
                    src={`/images/main_image_0${index + 1}.jpg`}
                    alt={movie[index].title}
                    style={mcGridItemImage}
                  />
                )}
              </Box>
              <Box sx={mcGridItemInnerBox}>
                <img
                  src={`/images/icon/${movie[index].ageRating.replace(
                    '세',
                    '',
                  )}_46x46.png`}
                  alt={movie[index].ageRating}
                  style={mcGridItemLogoImage}
                />
                <Typography sx={mcTitleTypo}>{movie[index].title}</Typography>
              </Box>
              <Box sx={mcGridItemBoxTypo}>
                <Typography sx={mcTypo}>
                  예매율 {movie[index].reservationRate}%
                </Typography>
                &nbsp;
                <Typography sx={{ ...mcTypo, color: '#C0C0C0' }}>|</Typography>
                &nbsp;
                <Typography sx={mcTypo}>
                  개봉일 {movie[index].releaseDate.replace(/-/g, '.')}
                </Typography>
              </Box>
              <Button
                variant='contained'
                disableElevation
                disableRipple
                sx={mcButton}
              >
                예매
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
