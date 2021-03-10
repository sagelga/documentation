# กฎการเล่นเกม
ผู้เล่นต้องทำการแยกขยะลงถังที่ถูกต้อง เมื่อผู้เล่นแยกขยะลงถังที่ถูกต้อง ผู้เล่นจะได้รับคะแนนตามความแม่นยำที่กดได้ เช่น perfect, great, nice, bad, miss แต่ถ้ากดได้ bad, miss, แยกขยะผิด หรือไม่กดก็จะถูกลดเลือด เมื่อแถบเลือดลดลงเหลือ 0 เกมจะจบและผู้เล่นก็จะแพ้

ผู้เล่นต้องเล่นให้จบและทำคะแนนให้สูงที่สุด โดยสามารถเล่นให้ high score สูงขึ้นเรื่อยๆได้

ภายในเกมจะมีขยะอยู่ 12 ลักษณะ โดยมีประเภทของขยะ 4 ประเภทได้แก่
- ขยะอันตราย
- ขยะรีไซเคิล
- ขยะเปียก
- ขยะทั่วไป

โดยเมื่อเกมเริ่มต้นขึ้น จะมีขยะขึ้นมาเพื่อให้ผู้เล่นได้ทำการคัดแยก โดยที่ผู้เล่นจะต้องทำการคัดแยกเมื่อขยะนั้นอยู่ในเส้นคัดแยก (เส้นสีขาว) ด้วยการกดแป้นบนคีย์บอร์ด

## การควบคุม
เพื่อทำการคัดแยกขยะที่เส้นคัดแยก ผู้ใช้จะต้องคัดแยกด้วยแป้นคีย์บอร์ดตามประเภทของขยะดังนี้
- `D` สำหรับถังขยะอันตราย
- `F` สำหรับถังขยะรีไซเคิล
- `J` สำหรับถังขยะเปียก
- `K` สำหรับถังขยะทั่วไป

## ประเภทขยะ
### ขยะอันตราย
| ภาพ                                                   | ชื่อขยะ     |
| ----------------------------------------------------- | --------- |
| <img src="./img/dangerous/thinner.png" height=64px>   | ทินเนอร์    |
| <img src="./img/dangerous/hairspray.png" height=64px> | สเปรย์ฉีดผม |
| <img src="./img/dangerous/lubricant.png" height=64px> | น้ำมันหล่อลื่น  |
| <img src="./img/dangerous/cigarette.png" height=64px> | บุหรี่       |

### ขยะรีไซเคิล
| ภาพ                                                     | ชื่อขยะ       |
| ------------------------------------------------------- | ----------- |
| <img src="./img/recycle/plasticbox.png" height=64px>    | ถาดพลาสติก   |
| <img src="./img/recycle/paperscrap.png" height=64px>    | เศษกระดาษ   |
| <img src="./img/recycle/plasticmug.png" height=64px>    | แก้วพลาสติก   |
| <img src="./img/recycle/paper.png" height=64px>         | กระดาษใช้แล้ว |
| <img src="./img/recycle/cartonbox.png" height=64px>     | กล่องลัง      |
| <img src="./img/recycle/plasticbottle.png" height=64px> | ขวดพลาสติก   |

### ขยะเปียก
| ภาพ                                            | ชื่อขยะ   |
| ---------------------------------------------- | ------- |
| <img src="./img/wet/popcorn.png" height=64px>  | ป๊อปคอร์น |
| <img src="./img/wet/donut.png" height=64px>    | โดนัท    |
| <img src="./img/wet/curry.png" height=64px>    | แกงกะหรี่ |
| <img src="./img/wet/tea.png" height=64px>      | ชาเขียว  |
| <img src="./img/wet/icecream.png" height=64px> | ไอศกรีม  |

### ขยะทั่วไป
| ภาพ                                                  | ชื่อขยะ     |
| ---------------------------------------------------- | --------- |
| <img src="./img/general/plasticbag.png" height=64px> | ถุงพลาสติก  |
| <img src="./img/general/ceramic.png" height=64px>    | จานเซรามิค |
| <img src="./img/general/toothpaste.png" height=64px> | หลอดยาสีฟัน |
| <img src="./img/general/rag.png" height=64px>        | ผ้าขี้ริ้ว     |
| <img src="./img/general/pencil.png" height=64px>     | ดินสอ      |
