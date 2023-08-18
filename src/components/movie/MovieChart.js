import Box from '@mui/material/Box';
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
  mcTypo,
} from '../../css/styles';
import { Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';

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
  const [isHovered, setIsHovered] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
  });

  const handleOnMouseEnter = (imageKey) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [imageKey]: true,
    }));
  };

  const handleOnMouseLeave = (imageKey) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [imageKey]: false,
    }));
  };

  return (
    <>
      <Box sx={mcOuterBox}>
        <Grid container sx={mcGridContainer}>
          <Grid item xs={12} sm={12} sx={mcGridItemSearch}></Grid>
          <Grid item xs={12} sm={3} sx={mcGridItemMovie}>
            <Box
              sx={mcGridItemImageBox}
              onMouseEnter={() => handleOnMouseEnter('image1')}
              onMouseLeave={() => handleOnMouseLeave('image1')}
            >
              {isHovered.image1 ? (
                <img
                  src='/images/main_image_01.jpg'
                  alt={movie[0].title}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                  style={mcGridItemImageOverlay}
                />
              ) : (
                <img
                  src='/images/main_image_01.jpg'
                  alt={movie[0].title}
                  style={mcGridItemImage}
                />
              )}
              {isHovered.image1 && (
                <Typography sx={mcImageText}>
                  {movie[0].summaryTitle}
                  <br />
                  <br />
                  {movie[0].summaryContents}
                </Typography>
              )}
            </Box>
            <Box sx={mcGridItemInnerBox}>
              <img
                src='/images/15_46x46.png'
                alt={movie[0].ageRating}
                style={mcGridItemLogoImage}
              />
              <Typography sx={{ fontSize: '20px' }}>
                {movie[0].title}
              </Typography>
            </Box>
            <Box sx={mcGridItemBoxTypo}>
              <Typography sx={mcTypo}>
                예매율 {movie[0].reservationRate}%
              </Typography>
              &nbsp;
              <Typography sx={{ ...mcTypo, color: '#C0C0C0' }}>|</Typography>
              &nbsp;
              <Typography sx={mcTypo}>
                개봉일 {movie[0].releaseDate.replace(/-/g, '.')}
              </Typography>
            </Box>
            <Button variant='contained' disableRipple sx={mcButton}>
              예매
            </Button>
          </Grid>

          <Grid item xs={12} sm={3} sx={mcGridItemMovie}>
            <Box
              sx={mcGridItemImageBox}
              onMouseEnter={() => handleOnMouseEnter('image2')}
              onMouseLeave={() => handleOnMouseLeave('image2')}
            >
              {isHovered.image2 ? (
                <img
                  src='/images/main_image_02.jpg'
                  alt={movie[1].title}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                  style={mcGridItemImageOverlay}
                />
              ) : (
                <img
                  src='/images/main_image_02.jpg'
                  alt={movie[1].title}
                  style={mcGridItemImage}
                />
              )}
              {isHovered.image2 && (
                <Typography sx={mcImageText}>
                  {movie[1].summaryTitle}
                  <br />
                  <br />
                  {movie[1].summaryContents}
                </Typography>
              )}
            </Box>
            <Box sx={mcGridItemInnerBox}>
              <img
                src='/images/15_46x46.png'
                alt={movie[0].ageRating}
                style={mcGridItemLogoImage}
              />
              <Typography sx={{ fontSize: '20px' }}>
                {movie[1].title}
              </Typography>
            </Box>
            <Box sx={mcGridItemBoxTypo}>
              <Typography sx={mcTypo}>
                예매율 {movie[1].reservationRate}%
              </Typography>
              &nbsp;
              <Typography sx={{ ...mcTypo, color: '#C0C0C0' }}>|</Typography>
              &nbsp;
              <Typography sx={mcTypo}>
                개봉일 {movie[1].releaseDate.replace(/-/g, '.')}
              </Typography>
            </Box>
            <Button variant='contained' disableRipple sx={mcButton}>
              예매
            </Button>
          </Grid>

          <Grid item xs={12} sm={3} sx={mcGridItemMovie}>
            <Box
              sx={mcGridItemImageBox}
              onMouseEnter={() => handleOnMouseEnter('image3')}
              onMouseLeave={() => handleOnMouseLeave('image3')}
            >
              {isHovered.image3 ? (
                <img
                  src='/images/main_image_03.jpg'
                  alt={movie[2].title}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                  style={mcGridItemImageOverlay}
                />
              ) : (
                <img
                  src='/images/main_image_03.jpg'
                  alt={movie[2].title}
                  style={mcGridItemImage}
                />
              )}
              {isHovered.image3 && (
                <Typography sx={mcImageText}>
                  {movie[2].summaryTitle}
                  <br />
                  <br />
                  {movie[2].summaryContents}
                </Typography>
              )}
            </Box>
            <Box sx={mcGridItemInnerBox}>
              <img
                src='/images/15_46x46.png'
                alt={movie[0].ageRating}
                style={mcGridItemLogoImage}
              />
              <Typography sx={{ fontSize: '20px' }}>
                {movie[2].title}
              </Typography>
            </Box>
            <Box sx={mcGridItemBoxTypo}>
              <Typography sx={mcTypo}>
                예매율 {movie[2].reservationRate}%
              </Typography>
              &nbsp;
              <Typography sx={{ ...mcTypo, color: '#C0C0C0' }}>|</Typography>
              &nbsp;
              <Typography sx={mcTypo}>
                개봉일 {movie[2].releaseDate.replace(/-/g, '.')}
              </Typography>
            </Box>
            <Button variant='contained' disableRipple sx={mcButton}>
              예매
            </Button>
          </Grid>

          <Grid item xs={12} sm={3} sx={mcGridItemMovie}>
            <Box
              sx={mcGridItemImageBox}
              onMouseEnter={() => handleOnMouseEnter('image4')}
              onMouseLeave={() => handleOnMouseLeave('image4')}
            >
              {isHovered.image4 ? (
                <img
                  src='/images/main_image_04.jpg'
                  alt={movie[3].title}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                  style={mcGridItemImageOverlay}
                />
              ) : (
                <img
                  src='/images/main_image_04.jpg'
                  alt={movie[3].title}
                  style={mcGridItemImage}
                />
              )}
              {isHovered.image4 && (
                <Typography sx={mcImageText}>
                  {movie[3].summaryTitle}
                  <br />
                  <br />
                  {movie[3].summaryContents}
                </Typography>
              )}
            </Box>
            <Box sx={mcGridItemInnerBox}>
              <img
                src='/images/15_46x46.png'
                alt={movie[0].ageRating}
                style={mcGridItemLogoImage}
              />
              <Typography sx={{ fontSize: '20px' }}>
                {movie[3].title}
              </Typography>
            </Box>
            <Box sx={mcGridItemBoxTypo}>
              <Typography sx={mcTypo}>
                예매율 {movie[3].reservationRate}%
              </Typography>
              &nbsp;
              <Typography sx={{ ...mcTypo, color: '#C0C0C0' }}>|</Typography>
              &nbsp;
              <Typography sx={mcTypo}>
                개봉일 {movie[3].releaseDate.replace(/-/g, '.')}
              </Typography>
            </Box>
            <Button variant='contained' disableRipple sx={mcButton}>
              예매
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
