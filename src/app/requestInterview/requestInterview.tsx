import { FC } from 'react'
import styles from "./requestInterview.module.css"
import Footer from "@ui/footer";
import Navigation from "@ui/Nav";
import Template from "@template/template";
import Form from "./module/form";
import Info from "./module/info";

const RequestInterView: FC = () => {

  return (
    <>
      < Navigation />

      < section >

        < h1 className={styles.header} > SHARE YOUR < br /> PASSION </ h1 >
        <Template
          elements={[
            <Info />,
            <Form />
          ]}
        />

      </ section >

      <  div style={{ height: "100px" }} > </ div >

      < Footer />
    </>
  )
}


export default RequestInterView;