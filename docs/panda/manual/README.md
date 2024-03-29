# Project Panda User Manual 🐼

คู่มือผู้ใช้ระบบจองสถานที่ในสถาบันพระจอมเกล้าฯลาดกระบัง

Welcome to the repository of **Project Panda** (or _The Panda Project_), aka _KMITL Online Space Reservation System_.

## สำหรับผู้ใช้งานทั่วไป

-   [ค้นหาสถานที่](https://docs.sagelga.com/docs/panda/manual/client/find-space.md)
-   [จองสถานที่](https://docs.sagelga.com/docs/panda/manualclient/reserve-a-space.md)
-   [ดูสถานะการขอใช้สถานที่](https://docs.sagelga.com/docs/panda/manualclient/check-reqest.md)
-   [ยกเลิกการขอใช้สถานที่](https://docs.sagelga.com/docs/panda/manualclient/cancel-a-request.md)
-   [แจ้งปัญหาของสถานที่](https://docs.sagelga.com/docs/panda/manualclient/report-a-problem.md)
-   [วิธีเข้าสู่ระบบ](https://docs.sagelga.com/docs/panda/manualclient/login.md)
-   [วิธีออกจากระบบ](https://docs.sagelga.com/docs/panda/manualclient/logout.md)

## สำหรับผู้ใช้งานที่มีอำนาจในการอนุมัติ

-   [อนุมัติการใช้สถานที่](https://docs.sagelga.com/docs/panda/manualapprover/approve-request.md)
-   [ปฎิเสธคำร้องการใช้สถานที่](https://docs.sagelga.com/docs/panda/manualapprover/decline-request.md)

## สำหรับเจ้าหน้าที่ด้านวิชาการ/งานอาคารสถานที่

-   [เพื่มสถานที่เข้าในระบบ](https://docs.sagelga.com/docs/panda/manualadmin/add-space.md)
-   [แก้ไขข้อมูลสถานที่](https://docs.sagelga.com/docs/panda/manualadmin/edit-space.md)
-   [ลบสถานที่ออกจากระบบ](https://docs.sagelga.com/docs/panda/manualadmin/delete-space.md)
-   [เพี่มผู้ใช้เข้ากลุ่มผู้ใช้งาน](https://docs.sagelga.com/docs/panda/manualadmin/add-role.md)
-   [ลบผู้ใช้งาน](https://docs.sagelga.com/docs/panda/manualadmin/delete-role.md)
-   [สร้างกลุ่มผู้ใช้ใหม่](https://docs.sagelga.com/docs/panda/manualadmin/create-group.md)
-   [แก้ไขข้อมูลของกลุ่มผู้ใช้](https://docs.sagelga.com/docs/panda/manualadmin/edit-group.md)
-   [ลบกลุ่มผู้ใช้](https://docs.sagelga.com/docs/panda/manualadmin/delete-group.md)
-   [เพื่มอุปกรณ์ที่สามารถยืมได้](https://docs.sagelga.com/docs/panda/manualadmin/add-material.md)
-   [ลบอุปกรณ์ในระบบ](https://docs.sagelga.com/docs/panda/manualadmin/delete-material.md)

## User Permission

|                                                      | แอดมิน          | เจ้าหน้าที่งานอาคารสถานที่ / งานกิจกรรม    | อาจารย์ภายนคณะนั้นๆ                          | นักศึกษาภายในคณะนั้นๆ  | อาจารย์ต่างคณะ / นอกสถาบัน              | นักศึกษาต่างคณะ                         | บุคคลอื่นๆ / ไม่ login |
| ---------------------------------------------------- | --------------- | ------------------------------------------ | -------------------------------------------- | ---------------------- | --------------------------------------- | --------------------------------------- | ---------------------- |
| เข้าสู่ระบบ                                          | ✔️              | ✔️                                         | ✔️                                           | ✔️                     | ✔️                                      | ✔️                                      | ✔️                     |
| เข้าหน้า Explore และทำการ Query                      | ✔️              | ✔️                                         | ✔️                                           | ✔️                     | ✔️                                      | ✔️                                      | ✔️                     |
| ต้องทำการยืนยัน CAPTCHA ก่อน Query                   | ❌              | ❌                                         | ❌                                           | ✔️                     | ❌                                      | ✔️                                      | ✔️                     |
| เข้าหน้า Transaction Page                            | ✔️              | ✔️                                         | ✔️                                           | ✔️                     | ✔️                                      | ✔️                                      | -                      |
| รอการยืนยันโดยเจ้าหน้าที่                            | -               | -                                          | ✔️                                           | ✔️                     | ✔️                                      | ✔️                                      | -                      |
| รอการยืนยันโดยอาจารย์ที่ปรึกษา                       | -               | -                                          | ❌                                           | ✔️                     | ❌                                      | ✔️                                      | -                      |
| รอการยืนยันโดยรองคณบดี/ห้วหน้าภาค                    | -               | -                                          | ✔️ หากจองเป็นเทอม<br/>❌ หากจองเป็นครั้งคราว | ✔️                     | ✔️ ทั้งของคณะตนเอง และคณะที่ดูแลสถานที่ | ✔️ ทั้งของคณะตนเอง และคณะที่ดูแลสถานที่ | -                      |
| เข้าหน้า Verification Page เพื่ออนุมัติ/ปฎิเสธการจอง | ✔️              | ✔️                                         | ✔️ หากเป็นอาจารย์ที่ปรึกษา                   | ❌                     | ✔️ หากเป็นอาจารย์ที่ปรึกษา              | ❌                                      | -                      |
| เข้าหน้า Overall Export Page                         | ✔️              | ✔️                                         | ❌                                           | ❌                     | ❌                                      | ❌                                      | -                      |
| เข้าหน้า Transaction Export Page                     | ✔️              | ✔️                                         | ✔️                                           | ✔️                     | ✔️                                      | ✔️                                      | -                      |
| เข้าหน้า Process Page                                | ✔️              | ✔️ ทุกอัน เฉพาะที่ยังไม่ได้มีการใช้งานจริง | ✔️ เฉพาะการจองของตนเอง                       | ✔️ เฉพาะการจองของตนเอง | ✔️ เฉพาะการจองของตนเอง                  | ✔️ เฉพาะการจองของตนเอง                  | -                      |
| ทำการยกเลิกการจอง                                    | ✔️              | ✔️ ทุกอัน เฉพาะที่ยังไม่ได้มีการใช้งานจริง | ✔️ เฉพาะการจองของตนเอง                       | ✔️ เฉพาะการจองของตนเอง | ✔️ เฉพาะการจองของตนเอง                  | ✔️ เฉพาะการจองของตนเอง                  | -                      |
| ทำการเปลี่ยนห้อง เปลี่ยนเวลา                         | ✔️              | ✔️                                         | ❌                                           | ❌                     | ❌                                      | ❌                                      | -                      |
| แก้ไข Room Profile Page                              | ✔️              | ✔️ ของคณะตนเองเท่านั้น                     | ❌                                           | ❌                     | ❌                                      | ❌                                      | -                      |
| แก้ไขเบอร์ติดต่อกลับของตนเองใน Profile Page          | ✔️ และของคนอื่น | ✔️                                         | ✔️                                           | ✔️                     | ✔️                                      | ✔️                                      | -                      |
