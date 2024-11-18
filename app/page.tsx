import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* タイトル */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginBlock={"25px 5px"}
      >
        <Typography variant={"h1"} fontSize={"48px"} fontWeight={"bold"}>
          サルでもわかるIoTデバイスの作り方
        </Typography>
      </Box>
      {/* 説明 */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={"15px"}
      >
        <Typography variant={"h2"} fontSize={"24px"}>
          Iotデバイスを、どのご家庭にもあるパーツを使って作る方法を教えます
        </Typography>
        <Box width={"80%"} height={2} my={"8px"} bgcolor="#333333" />
      </Box>
      {/* 順番 */}
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        paddingBottom={"120px"}
        bgcolor={"#D9E5FF"}
      >
        <Grid item xs={12} paddingBottom={"20px"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            py={2}
          >
            <Box
              width={"20%"}
              height={2}
              marginInline={"10px"}
              bgcolor="#333333"
            />
            <Typography variant={"h3"} fontSize={"28px"}>
              作り方
            </Typography>
            <Box
              width={"20%"}
              height={2}
              marginInline={"10px"}
              bgcolor="#333333"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={"20px"}
        >
          <Card sx={{ width: "275px" }}>
            <CardContent>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Image
                  src={"/microcomputer.png"}
                  alt={"マイコンのイラスト"}
                  width={180}
                  height={200}
                />
                <Typography variant="h4" fontSize={"18px"} fontWeight={"bold"}>
                  材料を用意する
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <ArrowForwardIosIcon style={{ paddingInline: 2, fontSize: 40 }} />
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={"20px"}
        >
          <Card sx={{ width: "275px" }}>
            <CardContent>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Image
                  src={"/kumitate.png"}
                  alt={"組み立てる人のイラスト"}
                  width={200}
                  height={200}
                />
                <Typography variant="h4" fontSize={"18px"} fontWeight={"bold"}>
                  組み立てる
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <ArrowForwardIosIcon style={{ paddingInline: 2, fontSize: 40 }} />
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingInline={"20px"}
        >
          <Card sx={{ width: "275px" }}>
            <CardContent>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Image
                  src={"/computer_man.png"}
                  alt={"コーディングする人のイラスト"}
                  width={120}
                  height={10}
                />
                <Typography variant="h4" fontSize={"18px"} fontWeight={"bold"}>
                  コードを書く
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <ArrowForwardIosIcon style={{ paddingInline: 2, fontSize: 40 }} />
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={"20px"}
        >
          <ArrowForwardIosIcon style={{ paddingInline: 2, fontSize: 40 }} />
          <Card sx={{ width: "400px" }}>
            <CardContent>
              <Image
                src={"/5000choyen.png"}
                alt={"Iot機器完成"}
                width={400}
                height={0}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* 説明 材料を用意する */}
      <Box paddingTop={"10px"} position="relative">
        <Typography
          variant="h3"
          fontSize={"82px"}
          fontWeight={"bold"}
          sx={{ opacity: 0.1 }}
        >
          Step.1
        </Typography>
        <Typography
          variant="h3"
          fontSize={"32px"}
          fontWeight={"bold"}
          sx={{
            position: "absolute", // 絶対位置指定
            top: 70, // 上部に配置
            left: 30, // 必要に応じて調整可能
          }}
        >
          材料を用意する
        </Typography>
        <Box width={"80%"} height={6} my={"8px"} bgcolor="#333333" />
      </Box>
      {/* 説明 材料を組み立てる */}
      <Box paddingTop={"10px"} position="relative">
        <Typography
          variant="h3"
          fontSize={"82px"}
          fontWeight={"bold"}
          sx={{ opacity: 0.1 }}
        >
          Step.2
        </Typography>
        <Typography
          variant="h3"
          fontSize={"32px"}
          fontWeight={"bold"}
          sx={{
            position: "absolute", // 絶対位置指定
            top: 70, // 上部に配置
            left: 30, // 必要に応じて調整可能
          }}
        >
          材料を組み立てる
        </Typography>
        <Box width={"80%"} height={6} my={"8px"} bgcolor="#333333" />
      </Box>
      {/* 説明 コードを書く */}
      <Box paddingTop={"10px"} position="relative">
        <Typography
          variant="h3"
          fontSize={"82px"}
          fontWeight={"bold"}
          sx={{ opacity: 0.1 }}
        >
          Step.3
        </Typography>
        <Typography
          variant="h3"
          fontSize={"32px"}
          fontWeight={"bold"}
          sx={{
            position: "absolute", // 絶対位置指定
            top: 70, // 上部に配置
            left: 30, // 必要に応じて調整可能
          }}
        >
          コードを書く
        </Typography>
        <Box width={"80%"} height={6} my={"8px"} bgcolor="#333333" />
      </Box>
    </>
  );
}
