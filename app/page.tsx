import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const arduinoCode = `
#include <WiFi.h>
#include <WiFiServer.h>
#include <Servo.h> // サーボモーターを制御するライブラリ

// WiFi接続情報
char ssid[] = "1319-Network";         // WiFiネットワークのSSID
char pass[] = "ymks1319";     // WiFiネットワークのパスワード

WiFiServer server(80);            // ポート80でWebサーバーを起動

Servo myservo;                    // サーボモーターのインスタンス
int servoPin = 9;                 // サーボモーターの接続ピン
int servoPosition = 0;            // サーボモーターの現在位置（0度から180度）

void setup() {
  // シリアルモニタの設定
  Serial.begin(9600);
  while (!Serial) {
    ; // シリアル接続を待つ
  }

  // サーボモーターを初期化
  myservo.attach(servoPin);
  myservo.write(servoPosition); // 初期位置は0度

  // WiFiに接続
  WiFi.begin(ssid, pass);
  Serial.println("Connecting to WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("Connected to WiFi");

  // Webサーバー開始
  server.begin();
  Serial.print("Server started at IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  WiFiClient client = server.available();  // クライアント接続の待機

  if (client) {
    String request = "";  // クライアントからのリクエスト
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        request += c;

        // リクエストの終わりを探す
        if (c == '\\n' && request.endsWith("\\r\\n")) {
          // Webページを返す
          String html = "<!DOCTYPE HTML><html>";
          html += "<head><style>body { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }</style></head>";
          html += "<body>";

          if (request.indexOf("/click") != -1) {
            // 一枚目のボタンがクリックされた場合
            if (servoPosition == 0) {
              myservo.write(180);  // サーボモーターを180度に回転
              servoPosition = 180; // サーボの位置を更新
            }
            html += "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdJH5wsMafP8lzMCvcjcD60tHKGG-bBEVhBsv4G-e0SkQDeHLGptz1w0hXVE0sn3d_DyqUw9F6BC8vSL-o0hU38V5kG1LDop44e31aVk1IStqT7SdGtTp9htxawSDXLtBs2dHFbYlsbH4d/s800/button_onoff2.png' alt='Second Image' style='cursor:pointer;' onclick=\\"location.href='/back';\\" />";
          } else if (request.indexOf("/back") != -1) {
            // 二枚目のボタンがクリックされた場合、モーターを元の位置に戻す
            myservo.write(0);    // サーボモーターを0度に戻す
            servoPosition = 0;   // サーボの位置を更新
            html += "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1EAZ-GpGW8ZDn_TGcou7tE1aDpC83NtDSf4N6X7M_iE8atQFUP9vwsh8gB5qL079hgio2xDenZNlLvI_RFwQRXpBdrCbb1I6xrNZxtbygaQnJe5nP-oVJ6qdfmqGuQLzmSYY7gYH-T9yn/s800/button_onoff1.png' alt='First Image' style='cursor:pointer;' onclick=\\"location.href='/click';\\" />";
          } else {
            // 最初のページ
            html += "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1EAZ-GpGW8ZDn_TGcou7tE1aDpC83NtDSf4N6X7M_iE8atQFUP9vwsh8gB5qL079hgio2xDenZNlLvI_RFwQRXpBdrCbb1I6xrNZxtbygaQnJe5nP-oVJ6qdfmqGuQLzmSYY7gYH-T9yn/s800/button_onoff1.png' alt='First Image' style='cursor:pointer;' onclick=\\"location.href='/click';\\" />";
          }

          html += "</body></html>";

          // レスポンスを返す
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");
          client.println();
          client.print(html);
          break;
        }
      }
    }

    // クライアント接続を閉じる
    client.stop();
    Serial.println("Client disconnected");
  }
}
`;

const Home = () => {
  return (
    <>
      {/* タイトル */}
      <Box
        display={"flex"}
        marginBlock={"25px 5px"}
        flexDirection={"row"}
        paddingInline={"5px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box justifyContent={"center"} flexGrow={1} paddingLeft={{ md: 20 }}>
          <Typography
            variant={"h1"}
            fontSize={{ xs: 20, sm: 48 }}
            fontWeight={"bold"}
            textAlign="center"
          >
            私文でもわかる！IoTデバイスの作り方
          </Typography>

          <Typography
            variant={"h2"}
            textAlign={"center"}
            fontSize={{ xs: 18, sm: 24 }}
            sx={{ marginTop: 2 }}
          >
            Iotデバイスを、どのご家庭にもある材料を使って作る方法を教えます
          </Typography>
        </Box>

        <Box
          justifyContent={"end"}
          sx={{
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          <Image
            src={"/qrcode.png"}
            alt={"https://hard-tutorial.vercel.app/"}
            width={150}
            height={150}
          />
          <Typography
            variant={"h5"}
            textAlign={"center"}
            fontSize={15}
            sx={{ inlineSize: 150 }}
          >
            お使いの端末でも
            <br />
            ご覧いただけます
          </Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={"15px"}
      >
        <Box width={"80%"} height={2} my={"8px"} bgcolor="#333333" />
        {/* 説明 */}
      </Box>
      {/* 順番 */}
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        paddingBottom={{ xs: 10, md: 30 }}
        bgcolor={"#D9E5FF"}
      >
        <Grid item xs={12} paddingBottom={{ md: "20px" }}>
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
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          paddingTop={"10px"}
        >
          <ButtonBase
            href="#step1"
            sx={{
              width: "275px",
              height: "250px",
              textAlign: "inherit",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  src={"/microcomputer.png"}
                  alt={"マイコンのイラスト"}
                  width={180}
                  height={200}
                />
                <Typography
                  variant="h4"
                  fontSize={"18px"}
                  fontWeight={"bold"}
                  mt={2}
                >
                  材料を用意する
                </Typography>
              </CardContent>
            </Card>
          </ButtonBase>
          <ArrowForwardIosIcon style={{ paddingInline: 2, fontSize: 40 }} />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          paddingTop={"10px"}
        >
          <ButtonBase
            href="#step1"
            sx={{
              width: "275px",
              height: "250px",
              textAlign: "inherit",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  src={"/kumitate.png"}
                  alt={"材料を組み立てる人のイラスト"}
                  width={180}
                  height={200}
                />
                <Typography
                  variant="h4"
                  fontSize={"18px"}
                  fontWeight={"bold"}
                  mt={2}
                >
                  材料を組み立てる
                </Typography>
              </CardContent>
            </Card>
          </ButtonBase>
          <ArrowForwardIosIcon style={{ paddingInline: 2, fontSize: 40 }} />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          paddingTop={"10px"}
        >
          <ButtonBase
            href="#step1"
            sx={{
              width: "275px",
              height: "250px",
              textAlign: "inherit",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  src={"/computer_man.png"}
                  alt={"コードを書く人のイラスト"}
                  width={120}
                  height={100}
                />
                <Typography
                  variant="h4"
                  fontSize={"18px"}
                  fontWeight={"bold"}
                  mt={2}
                >
                  コードを書く
                </Typography>
              </CardContent>
            </Card>
          </ButtonBase>
          <ArrowForwardIosIcon style={{ paddingInline: 2, fontSize: 40 }} />
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={{ xs: "10px", md: "100px" }}
          paddingInline={"20px"}
        >
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
      <div id="step1" />
      <Box paddingTop={"10px"} position="relative">
        <Typography
          variant="h3"
          fontSize={{ xs: 48, sm: 82 }}
          fontWeight={"bold"}
          sx={{ opacity: 0.1 }}
        >
          Step.1
        </Typography>
        <Typography
          variant="h3"
          fontSize={{ xs: 24, sm: 48 }}
          fontWeight="bold"
          sx={{
            position: "absolute",
            top: { xs: 40, sm: 60 },
            left: { xs: 10, sm: 30 },
          }}
        >
          材料を用意する
        </Typography>

        <Box width={"80%"} height={6} my={"8px"} bgcolor="#333333" />
        <Box mb={5}>
          <Typography variant="h4" fontSize={{ xs: 20, md: 28 }}>
            【レシピ】
          </Typography>
          {/* 材料 */}
          <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
            <Box sx={{ width: { xs: 300, sm: 475 }, height: "auto" }}>
              <Image
                src={"/arduino_r4_wifi.jpg"}
                alt={"Arduino R4 WiFi"}
                height={1000}
                width={1000}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Box
              display={"flex"}
              paddingInline={{ xs: 2, md: 5 }}
              flexDirection={"column"}
            >
              <Typography variant="h5" fontSize={{ xs: 20, md: 28 }}>
                Arduino R4 WiFi
              </Typography>
              <Box paddingLeft={{ md: 2 }}>
                <Typography variant="h5" fontSize={{ xs: 15, md: 20 }}>
                  どのご家庭にもあるワンボードマイコン、ArduinoのWiFi搭載モデルです。Renesasの32ビットマイクロコントローラRA4M1をベースに設計されており、Wi-Fi®およびBluetooth®接続用のESP32-S3-MINI-1-N8が搭載されています。なお、ご家庭にESP-WROOM-32しかない場合はそちらを使用しても大丈夫です。
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* 材料 */}
          <Box
            display={"flex"}
            paddingInline={"20px"}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Box sx={{ width: { xs: 300, sm: 200 }, height: "auto" }}>
              <Image
                src={"/sg90.jpg"}
                alt={"サーボモータ"}
                height={1000}
                width={1000}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Box
              display={"flex"}
              paddingInline={{ md: 5 }}
              flexDirection={"column"}
            >
              <Typography variant="h5" fontSize={{ xs: 20, md: 28 }}>
                デジタル・マイクロサーボ SG90
              </Typography>
              <Box paddingLeft={{ md: 2 }}>
                <Typography variant="h5" fontSize={{ xs: 15, md: 20 }}>
                  どのご家庭にもあるサーボモーターです。切らしてしまっている場合には他のサーボモーターを使ってもかまいません。
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* 材料 */}
          <Box
            display={"flex"}
            paddingInline={"20px"}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Box sx={{ width: { xs: 300, sm: 200 }, height: "auto" }}>
              <Image
                src={"/wire.jpg"}
                alt={"ジャンパワイヤ"}
                height={1000}
                width={1000}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Box
              display={"flex"}
              paddingInline={{ md: 5 }}
              flexDirection={"column"}
            >
              <Typography variant="h5" fontSize={{ xs: 20, md: 28 }}>
                ジャンパワイヤ
              </Typography>
              <Box paddingLeft={2}>
                <Typography variant="h5" fontSize={"30px"} fontWeight={"bold"}>
                  道端に落ちてます
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Typography variant="h4" fontSize={{ xs: 20, md: 28 }}>
            ー材料を切らしてしまった場合ー
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={{ xs: "center" }}
          flexDirection={{ xs: "column", md: "row" }}
          paddingInline={"20px"}
          paddingBottom={"10px"}
        >
          <Box
            display={"flex"}
            justifyContent={{ xs: "center" }}
            sx={{ width: { xs: 300, sm: 500 }, height: "auto" }}
          >
            <Image
              src={"/akihabara.jpg"}
              alt={"秋葉原"}
              height={1000}
              width={1000}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box
            display={"flex"}
            paddingInline={"20px"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              variant="h5"
              fontSize={{ xs: 20, md: 32 }}
              fontWeight={"bold"}
            >
              ①秋葉原に行きます
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={{ xs: "center" }}
          flexDirection={{ xs: "column", md: "row" }}
          paddingInline={"20px"}
          paddingBottom={"10px"}
        >
          <Box
            display={"flex"}
            justifyContent={{ xs: "center" }}
            sx={{ width: { xs: 300, sm: 500 }, height: "auto" }}
          >
            <Image
              src={"/map.png"}
              alt={"マップ"}
              height={1000}
              width={1000}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box
            display={"flex"}
            paddingInline={"20px"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              variant="h5"
              fontSize={{ xs: 20, md: 32 }}
              fontWeight={"bold"}
            >
              ②なんかいい感じに曲がります
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={{ xs: "center" }}
          flexDirection={{ xs: "column", md: "row" }}
          paddingInline={"20px"}
          paddingBottom={"10px"}
        >
          <Box
            display={"flex"}
            justifyContent={{ xs: "center" }}
            sx={{ width: { xs: 300, sm: 500 }, height: "auto" }}
          >
            <Image
              src={"/akiduki.png"}
              alt={"秋月電子電商"}
              height={1000}
              width={1000}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box
            display={"flex"}
            paddingInline={"20px"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              variant="h5"
              fontSize={{ xs: 20, md: 32 }}
              fontWeight={"bold"}
            >
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
      <div id="step2" />
      <Box paddingTop={"10px"} position="relative">
        <Typography
          variant="h3"
          fontSize={{ xs: 48, sm: 82 }}
          fontWeight={"bold"}
          sx={{ opacity: 0.1 }}
        >
          Step.2
        </Typography>
        <Typography
          variant="h3"
          fontSize={{ xs: 24, sm: 48 }}
          fontWeight="bold"
          sx={{
            position: "absolute",
            top: { xs: 40, sm: 60 },
            left: { xs: 10, sm: 30 },
          }}
        >
          材料を組み立てる
        </Typography>
        <Box width={"80%"} height={6} my={"8px"} bgcolor="#333333" />
        <Box
          display={"flex"}
          paddingInline={"20px"}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box
            display={"flex"}
            justifyContent={{ xs: "center" }}
            border={"1px solid"}
            sx={{ width: { xs: 300, sm: 800 }, height: "auto" }}
          >
            <Image
              src={"/wiring.png"}
              alt={"配線図"}
              height={1000}
              width={1000}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            paddingLeft={{ xs: "0px", md: "20px" }}
            maxWidth={{ xs: "75%" }}
          >
            <Typography variant="h4" fontSize={{ xs: 24, md: 28 }}>
              配線図
            </Typography>
            <Typography variant="h5" fontSize={{ xs: 15, md: 20 }}>
              左図のように接続してください。
            </Typography>
            <Box border={"1px solid"} padding={"10px"} marginTop={"10px"}>
              <Typography variant="h5" fontSize={{ xs: 15, md: 18 }}>
                ArduinoUno → サーボモーター
              </Typography>
              <Typography variant="h5" fontSize={{ xs: 15, md: 18 }}>
                5v → Vcc(赤い線)
              </Typography>
              <Typography variant="h5" fontSize={{ xs: 15, md: 18 }}>
                GND → GND(黒い線)
              </Typography>
              <Typography variant="h5" fontSize={{ xs: 15, md: 18 }}>
                8 → PWM(オレンジの線)
              </Typography>
            </Box>
          </Box>
        </Box>
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
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"center"}
        width="100%"
      >
        <Container style={{ margin: 0, padding: 0 }}>
          <SyntaxHighlighter language="cpp" style={darcula}>
            {arduinoCode}
          </SyntaxHighlighter>
        </Container>
      </Box>
    </>
  );
};

export default Home;
