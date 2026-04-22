import { title } from "@/components/primitives";
import { sql } from "@vercel/postgres";
import RegistrationForm from "@/components/registrationForm";
import paymentBySSL from "@/components/payments/ssl";
import generateUniqueId from "generate-unique-id";
import { siteConfig } from "@/config/site";
import { Timer } from "@/components/timer";
import Marquee from "react-fast-marquee";

export default function Page() {

  const handleSubmission = async (formData: any) => {
    "use server";
    let lastId = 1000;
    let userId = lastId;

    try {
      const result = await sql`SELECT id FROM registrationData ORDER BY id DESC LIMIT 1`;
      userId = result.rows[0]?.id + 1;
      console.log("User ID: ", userId)
    } catch (error) {
      console.error("SQL error:", error);
    }

    try {
      const _tran_id = generateUniqueId({
        length: 12,
        useLetters: false
      });

      const tran_id = 'BECMCC' + siteConfig.serial.replace('.', '') + '-' + userId + '-' + _tran_id

      await sql`INSERT INTO registrationData (id, isTeam, teamName, member_1, member_2, email, phoneNumber, department, university, criteria, fee, ispaid, tran_id) 
                VALUES (${userId}, ${formData.isTeamSelected ? 'TRUE' : 'FALSE'}, ${formData.teamName}, ${formData.member1}, ${formData.member2}, ${formData.email}, ${formData.phoneNumber}, ${formData.department}, ${formData.university}, ARRAY[${formData.criteria.map((item: string) => `'${item}'`).join(', ')}], ${formData.fee}, FALSE, ${tran_id})`;
      console.log("Form submitted");
      const { status, message, data } = await paymentBySSL({
        userId: userId,
        tran_id: tran_id,
        ...formData
      });

      if (status === 200) {
        return {
          status: 200,
          message: "Success",
          url: data.GatewayPageURL,
        };
      }
    } catch (error) {
      console.error("SQL error occurred while sending data.");
      console.log(error)
    }
    return {
      status: 500,
      message: "Internal Server Error",
      url: "",
    };
  }

  return (
    <div className="flex flex-col w-full">
      {/* <Timer /> */}
      <h1 className={title()}>Registration</h1>


      <Marquee className="py-10" gradient={false} gradientColor="white" speed={100} pauseOnHover>
        <p
          className="text-2xl font-bold text-center text-rose-600"
        >
          Registration Process has been Closed!
        </p>
      </Marquee>
      {/* <RegistrationForm handleSubmission={handleSubmission} /> */}

    </div>
  );
}