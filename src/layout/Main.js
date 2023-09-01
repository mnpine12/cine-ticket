import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import {
  mbBoxImage,
  mbButton,
  mbGridContainerImage,
  mbGridContainerSearch,
  mbGridContainerText,
  mbGridItemButton,
  mbGridItemImage,
  mbGridItemSearch,
  mbGridItemText,
  mbImage,
  mbImageText,
  mbLinkItemBox,
  mbOuterBox,
  mbContGridItemImageOverlay,
} from '../css/LayoutStyles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  borderBottom: 'solid, 1px, #ffffff',
  color: '#ffff',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));
// 임의로 데이터 직접 Initialize
const movie = [
  {
    id: 0,
    title: '오펜하이머',
    ageRating: '15세',
    reservationRate: 56.9,
    releaseDate: '2023-08-15',
    summaryTitle: '"나는 이제 죽음이요, 세상의 파괴자가 되었다."',
    summaryContents:
      '세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트.',
  },
  {
    id: 1,
    title: '콘크리트유토피아',
    ageRating: '15세',
    reservationRate: 12.7,
    releaseDate: '2023-08-09',
    summaryTitle: '"아파트는 주민의 것"',
    summaryContents:
      '온 세상을 집어삼킨 대지진, 그리고 하루아침에 폐허가 된 서울. 모든 것이 무너졌지만 오직 황궁 아파트만은 그대로다.',
  },
  {
    id: 2,
    title: '메가로돈2',
    ageRating: '15세',
    reservationRate: 10.1,
    releaseDate: '2023-08-15',
    summaryTitle: '"더 거대해진 메가로돈 VS 더 강력해진 제이슨 스타뎀"',
    summaryContents:
      '지구 역사상 가장 거대한 최상위 포식자 ‘메가로돈’과 목숨 건 사투 끝에 살아남은 다이버 ‘조나스’는 해양 연구소의 팀원들과 함께 심해 탐사에 나서던 중 예기치 못한 사고로 해저 7,620m에 고립되고 만다.',
  },
  {
    id: 3,
    title: '밀수',
    ageRating: '15세',
    reservationRate: 4.1,
    releaseDate: '2023-07-26',
    summaryTitle: '"열길 물속은 알아도 한길 사람 속은 모른다!"',
    summaryContents:
      '평화롭던 바닷가 마을 군천에 화학 공장이 들어서면서 하루아침에 일자리를 잃은 해녀들. 먹고 살기 위한 방법을 찾던 승부사 "춘자"(김혜수)는 바다 속에 던진 물건을 건져 올리기만 하면 큰돈을 벌 수 있다는',
  },
];

export const Main = () => {
  const navigate = useNavigate();
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

  const handleOnClick = () => {
    alert('예매 페이지로 넘어갑니다.');
  };

  const handleMovieOnClick = (movieId) => {
    navigate(`/detail/${movieId}`);
  };

  return (
    <>
      <Header type={'black'} />
      <Box sx={mbOuterBox}>
        <Grid container sx={mbGridContainerText}>
          <Grid item xs={12} sm={12} sx={mbGridItemText}>
            박스오피스
          </Grid>
        </Grid>
        <Grid container sx={mbGridContainerImage}>
          {movie.map((item, index) => (
            <Grid item xs={12} sm={3} sx={mbGridItemImage} key={index}>
              <Box
                sx={mbBoxImage}
                onMouseEnter={() => handleOnMouseEnter(index)}
                onMouseLeave={() => handleOnMouseLeave(index)}
              >
                <Link to={`/detail/${movie[index].id}`}>
                  {isHovered[index]?.hovered === true ? (
                    <>
                      <img
                        src={`/images/main_image_0${index + 1}.jpg`}
                        alt={movie[index].title}
                        style={mbContGridItemImageOverlay}
                        onClick={() => handleMovieOnClick(movie[index].id)}
                      />
                      <Typography sx={mbImageText}>
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
                      style={mbImage}
                      onClick={() => handleMovieOnClick(movie[index].id)}
                    />
                  )}
                </Link>
              </Box>
              <Box sx={mbGridItemButton}>
                <Button
                  variant='contained'
                  disableElevation={true}
                  disableRipple
                  sx={mbButton}
                  onClick={handleOnClick}
                >
                  예매
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container sx={mbGridContainerSearch}>
          <Grid item xs={12} sm={3} sx={mbGridItemSearch}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='영화명을 입력해 주세요'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Grid>
          <Grid item xs={12} sm={3} sx={mbGridItemSearch}>
            <Box sx={mbLinkItemBox}>
              <img src='/images/icon/icon1.png' alt='icon1' />
              &nbsp;&nbsp;
              <Link href='#' color={'#ffffff'}>
                상영시간표
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} sx={mbGridItemSearch}>
            <Box sx={mbLinkItemBox}>
              <img src='/images/icon/icon2.png' alt='icon2' />
              &nbsp;&nbsp;
              <Link href='/movie/boxOffice' color={'#ffffff'}>
                박스오피스
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} sx={mbGridItemSearch}>
            <Box sx={mbLinkItemBox}>
              <img src='/images/icon/icon3.png' alt='icon3' />
              &nbsp;&nbsp;
              <Link href='/booking' color={'#ffffff'}>
                빠른예매
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
