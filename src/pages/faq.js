import { useContext } from "react";
import { TestContext } from "./_app";
import { openDB } from "../openDB";

// import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const faq = ({ faq }) => {
  const contextData = useContext(TestContext);

  if (!faq.length) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (faq.length) {
    return faq.map((f) => {
      return (
        <div key={f.id}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{f.question}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{f.answer}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      );
    });
  }
};

export const getStaticProps = async () => {
  const db = await openDB();
  const faq = await db.all("SELECT * FROM FAQ ORDER BY createDate DESC");

  return {
    props: { faq },
  };
};

export default faq;
