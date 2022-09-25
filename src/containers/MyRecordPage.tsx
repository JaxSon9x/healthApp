import React, { ReactNode, useState } from 'react';
import BaseLayout from '../layouts/Base';
import { Box, Grid, Stack, Typography } from '@mui/material';
import color from '../themes/color';
import * as _ from 'lodash';
import mock from '../mock/index.json';
import fontSize from '../themes/fontSize';
import Button from '../components/Button';
import BodyFatGraph from '../components/BodyFatGraph';
import MyRecordCard from 'src/components/MyRecordCard';
import MyDiaryCard from 'src/components/MyDiaryCard';

const MyRecordPage = () => {
  const [active, setActive] = useState(3);

  return (
    <BaseLayout>
      <Box maxWidth="lg" margin="auto" pt={7}>
        <Grid container spacing={2}>
          {_.map(mock.my_record_page.categories, (cat, index) => (
            <MyRecordCard key={index} {...cat} />
          ))}
        </Grid>
        <MyRecordPage.Section title="BODY RECORD" date="2021.05.21" id="body-record">
          <Box
            height={200}
            sx={{
              canvas: {
                maxHeight: '100%',
              },
            }}
          >
            <BodyFatGraph
              datasets={[
                {
                  label: 'Dataset 1',
                  data: _.range(0, 12).map(() => _.random(0, 100)),
                  borderColor: '#8FE9D0',
                  backgroundColor: '#8FE9D0',
                  pointRadius: 8 - 3, // {design pointRadius} - {borderWidth}
                  borderWidth: 3,
                },
                {
                  label: 'Dataset 1',
                  data: _.range(0, 12).map(() => _.random(0, 100)),
                  borderColor: '#FFCC21',
                  backgroundColor: '#FFCC21',
                  pointRadius: 8 - 3, // {design pointRadius} - {borderWidth}
                  borderWidth: 3,
                },
              ]}
              labels={_.range(1, 13).map((v) => `${v}月`)}
            />
          </Box>
          <Stack flexDirection="row" gap={2} mt={1}>
            {_.map(
              [
                {
                  label: '日',
                  active: active === 0,
                },
                {
                  label: '週',
                  active: active === 1,
                },
                {
                  label: '月',
                  active: active === 2,
                },
                {
                  label: '年',
                  active: active === 3,
                },
              ],
              (item, index) => (
                <Box
                  onClick={() => setActive(index)}
                  key={index}
                  sx={{
                    color: item.active ? color.light : color.primary.light,
                    bgcolor: item.active ? color.primary.light : color.light,
                    px: 3,
                    borderRadius: '11px',
                    cursor: 'pointer',
                  }}
                >
                  {item.label}
                </Box>
              ),
            )}
          </Stack>
        </MyRecordPage.Section>
        <MyRecordPage.Section title="MY EXERCISE" date="2021.05.21" id="my-exercise">
          <Box
            sx={{
              height: 192,
              overflow: 'auto',
              pt: 1,
              pr: 3,
            }}
            className="custom-scroll"
          >
            <Grid container columnSpacing={40 / 8} rowSpacing={1}>
              {_.map(mock.my_record_page.my_exercises, (item, index) => {
                return (
                  <Grid item xs={12} md={6} key={index}>
                    <Stack
                      color={color.light}
                      alignItems="baseline"
                      justifyContent="flex-start"
                      flexDirection="row"
                      sx={{
                        borderBottom: `1px solid ${color.gray['400']}`,
                      }}
                      gap={1}
                    >
                      <Box>●</Box>
                      <Box flexGrow={1}>
                        <Typography>{item.title}</Typography>
                        <Typography color={color.primary.light}>{item.energy}</Typography>
                      </Box>
                      <Box>
                        <Typography color={color.primary.light}>{item.timer}</Typography>
                      </Box>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </MyRecordPage.Section>
        <Stack mt={7} id="my-diary">
          <Typography fontSize={fontSize['19']}>MY DIARY</Typography>
          <Grid container spacing={1.5} mt={1}>
            {_.map(mock.my_record_page.my_record, (item, index) => (
              <Grid item key={index} xs={6} md={3}>
                <MyDiaryCard date={item.date} time={item.time} desc={item.desc} />
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack alignItems="center" pt={27 / 8} pb={8}>
          <Button variant="contained" disableElevation>
            自分の日記をもっと見る
          </Button>
        </Stack>
      </Box>
    </BaseLayout>
  );
};

MyRecordPage.Section = ({
  title,
  date,
  id,
  children,
}: {
  title: ReactNode;
  date: ReactNode;
  id?: string;
  children: ReactNode;
}) => {
  return (
    <Stack
      bgcolor={color.dark_05}
      mt={56 / 8}
      px={3}
      py={2}
      id={id}
      sx={{
        scrollMarginTop: '24px',
      }}
    >
      <Stack flexDirection="row" color={color.light}>
        <Typography
          fontSize={fontSize['3']}
          sx={{
            wordSpacing: 1000,
            maxWidth: 96,
          }}
        >
          {title}
        </Typography>
        <Typography fontSize={fontSize['17']}>{date}</Typography>
      </Stack>
      <Box>{children}</Box>
    </Stack>
  );
};

export default MyRecordPage;
