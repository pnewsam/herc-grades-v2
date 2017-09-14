import { connect } from "react-redux";
import Flash from "../Flash/Flash";

const mapStateToProps = state => {
  return(
    {
      messages: state.flashMessages
    }
  );
};

const FlashContainer = connect(mapStateToProps)(Flash);

export default FlashContainer;