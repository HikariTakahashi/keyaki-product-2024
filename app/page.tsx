import { Box, Card, CardContent, Grid, Link, Typography } from "@mui/material";
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
          Iotデバイスを、どのご家庭にもある材料を使って作る方法を教えます
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
          p={"20px"}
        >
          <Card sx={{ width: "275px" }}>
            <CardContent>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                p={"20px"}
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
            position: "absolute",
            top: 70,
            left: 30,
          }}
        >
          材料を用意する
        </Typography>
        <Box width={"80%"} height={6} my={"8px"} bgcolor="#333333" />
        <Box mb={5}>
          <Typography variant="h4" fontSize={"28px"}>
            【レシピ】
          </Typography>
          {/* 材料 */}
          <Box display={"flex"} paddingInline={"20px"}>
            <Image
              src={"/arduino_r4_wifi.jpg"}
              alt={"Arduino R4 WiFi"}
              width={200}
              height={0}
            />
            <Box
              display={"flex"}
              paddingInline={"20px"}
              flexDirection={"column"}
            >
              <Typography variant="h5" fontSize={"28px"}>
                Arduino R4 WiFi
              </Typography>
              <Box paddingLeft={2}>
                <Typography variant="h5" fontSize={"20px"}>
                  どのご家庭にもあるワンボードマイコン、ArduinoのWiFi搭載モデルです。Renesasの32ビットマイクロコントローラRA4M1をベースに設計されており、Wi-Fi®およびBluetooth®接続用のESP32-S3-MINI-1-N8が搭載されています。なお、ご家庭にESP-WROOM-32しかない場合はそちらを使用しても大丈夫です。
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* 材料 */}
          <Box display={"flex"} paddingInline={"20px"}>
            <Image src={"/sg90.jpg"} alt={"sg90"} width={200} height={0} />
            <Box
              display={"flex"}
              paddingInline={"20px"}
              flexDirection={"column"}
            >
              <Typography variant="h5" fontSize={"28px"}>
                デジタル・マイクロサーボ SG90
              </Typography>
              <Box paddingLeft={2}>
                <Typography variant="h5" fontSize={"20px"}>
                  どのご家庭にもあるサーボモーターです。切らしてしまっている場合には他のサーボモーターを使ってもかまいません。
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography variant="h4" fontSize={"28px"}>
          ー材料を切らしてしまった場合ー
        </Typography>
        <Box display={"flex"} paddingInline={"20px"} paddingBottom={"10px"}>
          <Image
            src={"/akihabara.jpg"}
            alt={"秋葉原駅"}
            width={500}
            height={0}
          />
          <Box
            display={"flex"}
            paddingInline={"20px"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h5" fontSize={"32px"} fontWeight={"bold"}>
              ①秋葉原に行きます
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} paddingInline={"20px"} paddingBottom={"10px"}>
          <Image src={"/map.png"} alt={"マップ"} width={500} height={0} />
          <Box
            display={"flex"}
            paddingInline={"20px"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h5" fontSize={"32px"} fontWeight={"bold"}>
              ②なんかいい感じに曲がります
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} paddingInline={"20px"} paddingBottom={"10px"}>
          <Image
            src={"/akiduki.png"}
            alt={"秋月電子電商"}
            width={500}
            height={0}
          />
          <Box
            display={"flex"}
            paddingInline={"20px"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h5" fontSize={"32px"} fontWeight={"bold"}>
              ③ここで買ってください
            </Typography>
            <Box display={"flex"} flexDirection={"row"}>
              <Typography variant="h5" fontSize={"15px"} fontWeight={"bold"}>
                場所→
              </Typography>
              <Link href="https://www.google.com/maps/dir/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E5%A4%96%E7%A5%9E%E7%94%B0%EF%BC%91%E4%B8%81%E7%9B%AE+%E7%A7%8B%E8%91%89%E5%8E%9F%E9%A7%85/%E3%80%92101-0021+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E5%A4%96%E7%A5%9E%E7%94%B0%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%98%E2%88%92%EF%BC%93+%E9%87%8E%E6%B0%B4%E3%83%93%E3%83%AB+1F+%E7%A7%8B%E6%9C%88%E9%9B%BB%E5%AD%90%E9%80%9A%E5%95%86+%E7%A7%8B%E8%91%89%E5%8E%9F%E5%BA%97/@35.6983781,139.7684964,904m/data=!3m2!1e3!5s0x60188c1c50dd801d:0xde1dbb4846f44c6b!4m14!4m13!1m5!1m1!1s0x60188ea7e2f93329:0x158f36257ff597b1!2m2!1d139.7730717!2d35.698383!1m5!1m1!1s0x60188c1c50deaaab:0x2017bd800004a2be!2m2!1d139.7698196!2d35.6993604!3e2?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D">
                https://www.google.com/maps/dir
              </Link>
            </Box>
          </Box>
        </Box>
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
            position: "absolute",
            top: 70,
            left: 30,
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
            position: "absolute",
            top: 70,
            left: 30,
          }}
        >
          コードを書く
        </Typography>
        <Box width={"80%"} height={6} my={"8px"} bgcolor="#333333" />
      </Box>
    </>
  );
}
