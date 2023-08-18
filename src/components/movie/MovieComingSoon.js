import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import {
  mcsButton,
  mcsGridContainer,
  mcsGridItemBoxTypo,
  mcsGridItemImage,
  mcsGridItemImageBox,
  mcsGridItemImageOverlay,
  mcsGridItemInnerBox,
  mcsGridItemLogoImage,
  mcsGridItemMovie,
  mcsGridItemSearch,
  mcsImageText,
  mcsOuterBox,
  mcsTitleTypo,
  mcsTypo,
} from '../../css/styles';

const movie = [
  {
    title: '강변의 무코리타',
    ageRating: '12세',
    reservationRate: 0,
    releaseDate: '2023-08-23',
    summaryTitle:
      '"과거를 지우고 새로운 삶을 위해 작은 어촌 마을 공장에 취직한 ‘야마다’는"',
    summaryContents:
      '공장 사장의 소개로 낡고 오래 된 ‘무코리타 연립주택’에 입주한다. 그곳에는 남편을 잃고 딸과 함께 살고 있는 집 주인 ‘미나미’ 남의 집을 제집 드나들 듯 오가는 옆집 이웃 ‘시마다’ 아들과 묘석을 방문 판매하는 ‘미조구치’가 살고 있다.',
  },
  {
    title: '아만다',
    ageRating: '15세',
    reservationRate: 0,
    releaseDate: '2023-08-23',
    summaryTitle:
      '"무대뽀 돌+I & 히키코모리 안하무인 "아싸"들의 진정한 홀로서기!"',
    summaryContents:
      '인생사 내멋대로, 내 맘대로! 남의 시선 따위는 개나 줘버린 채, 무대뽀 일상을 살아가는 "아만다". ',
  },
  {
    title: '볼코노고프 대위 탈출하다',
    ageRating: '15세',
    reservationRate: 0,
    releaseDate: '2023-08-23',
    summaryTitle: '"스탈린 공포정치 시대, 소련(러시아)을 저격하다!"',
    summaryContents:
      '역사상 가장 끔찍한 비밀경찰 조직 vs 볼코노고프 대위 희망 없는 세상, 영혼을 구하기 위한 대탈출! 숨막히는 서스펜스 스릴러!',
  },
  {
    title: '신체모음.zip',
    ageRating: '15세',
    reservationRate: 0,
    releaseDate: '2023-08-30',
    summaryTitle:
      '"폐쇄적인 시골 마을에 살고 있는 연약해 보이지만 강인한 여성 ‘정인’."',
    summaryContents:
      '도시에서 이사 온 뭐든지 다 알고 있는 것 같은 여성 ‘혜정’. 이들이 만나 펼쳐지는 가장 아름답고 강렬한 킬링 워맨스릴러',
  },
];

export const MovieComingSoon = () => {
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
      <Box sx={mcsOuterBox}>
        <Grid container sx={mcsGridContainer}>
          <Grid item xs={12} sm={12} sx={mcsGridItemSearch}></Grid>
          {movie.map((item, index) => (
            <Grid item xs={12} sm={3} sx={mcsGridItemMovie} key={index}>
              <Box
                sx={mcsGridItemImageBox}
                onMouseEnter={() => handleOnMouseEnter(index)}
                onMouseLeave={() => handleOnMouseLeave(index)}
              >
                {isHovered[index]?.hovered === true ? (
                  <>
                    <img
                      src={`/images/soon_image_0${index + 1}.jpg`}
                      alt={movie[index].title}
                      style={mcsGridItemImageOverlay}
                    />
                    <Typography sx={mcsImageText}>
                      {movie[index].summaryTitle}
                      <br />
                      <br />
                      {movie[index].summaryContents}
                    </Typography>
                  </>
                ) : (
                  <img
                    src={`/images/soon_image_0${index + 1}.jpg`}
                    alt={movie[index].title}
                    style={mcsGridItemImage}
                  />
                )}
              </Box>
              <Box sx={mcsGridItemInnerBox}>
                <img
                  src={`/images/${movie[index].ageRating.replace(
                    '세',
                    '',
                  )}_46x46.png`}
                  alt={movie[index].ageRating}
                  style={mcsGridItemLogoImage}
                />
                <Typography sx={mcsTitleTypo}>{movie[index].title}</Typography>
              </Box>
              <Box sx={mcsGridItemBoxTypo}>
                <Typography sx={mcsTypo}>
                  예매율 {movie[index].reservationRate}%
                </Typography>
                &nbsp;
                <Typography sx={{ ...mcsTypo, color: '#C0C0C0' }}>|</Typography>
                &nbsp;
                <Typography sx={mcsTypo}>
                  개봉일 {movie[index].releaseDate.replace(/-/g, '.')}
                </Typography>
              </Box>
              <Button variant='contained' disableRipple sx={mcsButton}>
                예매
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
