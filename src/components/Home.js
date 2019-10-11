import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { signOutAlt } from "@fortawesome/free-solid-svg-icons";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center">
            <h1>Home</h1>
          </Row>
          <div dir="rtl">
            <Row>
              <h2 style={{ color: "#003366", fontSize: "18pt" }}>אודות</h2>
            </Row>
            <Row>
              <strong style={{ color: "#666699", fontSize: "16px" }}>
                מהנדסים למען הקהילה
              </strong>
            </Row>
            <Row>
              <p style={{ textAlign: "right" }}>
                במסגרת פעילותה של המכללה האקדמית להנדסה אורט בראודה בקהילה פועל משנת תשע”ב פרויקט הדגל,
                 מהלב- פתרונות הנדסיים לאנשים עם מוגבלויות, 
                 בהשתתפות המחלקות האקדמיות ודקנט הסטודנטים של המכללה וארגונים העוסקים בשיקום ובסיוע לאנשים עם מוגבלויות.
                  הפרויקט זוכה לתמיכת הועדה לתכנון ולתקצוב (ות”ת) של המועצה להשכלה גבוהה (מל”ג) ולתמיכת קרנות ותורמים פרטיים.
              </p>
              <p style={{ textAlign: "right" }}>
                הפרויקט זכה בפרסים מהמל”ג לאורך השנים:
                <br/> פרס המל”ג לשנת <b>תשע"ד</b> לתרומה מיוחדת לקהילה – <b>פרס אישי לסטודנט</b>.
                <br/> פרס המל”ג לשנת <b>תשע"ה</b> לתרומה מיוחדת לקהילה –<b> מענק מחקר לחוקרות ד”ר אורית בראון- בנימין, ד”ר אורנה מילר וד”ר נגה שליט</b>.
                <br/> פרס המל”ג לשנת <b>תשע"ו</b> לתרומה מיוחדת לקהילה –<b> הצטיינות בפעילות חברתית קהילתית</b>.
                <br/>פרס המל”ג לשנת <b>תשע"ח</b> לתרומה מיוחדת לקהילה – <b>פרס אישי לסטודנט</b>.
              </p>
              <p style={{ textAlign: "right" }}>
                פרויקט מהלב מתמקד ביצירת תשתית שיתופית רב תחומית לשם הובלת פתרונות הנדסיים לצרכים העולים מהשטח.
                 קיים כיום מגוון רחב של מוצרי מדף התומכים בתפקוד יומיומי של אנשים עם מוגבלויות, 
                אך הם אינם נגישים לכלל האוכלוסייה הזקוקה להם בשל עלותם הגבוהה ובשל היעדר פתרונות המותאמים אישית
                 (Tailor made) לצרכי הלקוח. על פי נתוני הלמ”ס לשנת 2018, במדינת ישראל ישנם כ 1,550,000 אנשים עם מוגבלויות שונות,
                 המהווים כ- 18% מאוכלוסיית המדינה, חלקם, אינם מוצאים מענה הולם לצרכיהם במוצרים הקיימים.
                 שיתוף הפעולה בין האקדמיה לקהילה מקדם את איכות הטיפול הניתן לאנשים עם מוגבלויות מחד, 
                 ומאידך מכשיר דור מהנדסים עתידי עם מודעות ואחריות חברתית ואמפתיה לצרכים של אנשים עם מוגבלויות.  
              </p>
              <p style={{ textAlign: "right" }}>
              במכללה האקדמית להנדסה אורט בראודה עתיד לקום מרכז ידע הנדסי- שיקומי בינתחומי למען אנשים עם מוגבלויות, 
              שיהיה נגיש לכלל האוכלוסייה בארץ. המרכז ישלב את יכולות המחקר והפיתוח של הסגל האקדמי 
              והסטודנטים במכללה עם  הידע המקצועי של המחלקות לפיזיותרפיה ולריפוי 
              בעיסוק בבתי חולים ובאקדמיה, בבתי אבות, במרכזי תעסוקה, במרכזים לגיל הרך ואצל לקוחות פרטיים.  
              <br/>  העשייה במכללה כוללת בתוכה קורסים אקדמיים משלבי עשייה, פרוייקטי גמר של סטודנטים ומחקר של הסגל האקדמי,
               מעורבות חברתית של סטודנטים בקהילה וכן פתיחת שער לאקדמיה לתלמידי תיכון מפנימיות ברחבי הארץ.
              </p>
            </Row>
            <Row>
              <h2 style={{ color: "#003366", fontSize: "18pt" }}>צוות הפרויקט</h2>
            </Row>
            <Row style={{marginBottom:"100px"}}>
              <p style={{ textAlign: "right" }}>
               אורנית בר-זית – מנהלת הפרויקט
              <br/>  ד“ר אורית בראון בנימין – חברת סגל במחלקה להנדסת מכונות, ראש התמחות ביומכניקה שיקומית
              <br/>  ד”ר אורנה מילר – דקנית הסטודנטית, חברת סגל במחלקה להנדסת תכנה
              <br/>  ד”ר נירית גביש – חברת סגל במחלקה לתעשייה וניהול
              <br/>  עופר ג’אן – יועץ נגישות
              </p>
              </Row>
          </div>
        </Container>

      </>
    );
  }
}
