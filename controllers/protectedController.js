exports.checkAutentication = async (req, res,next) => {
  try {
    const hasAuthenticated = localStorage.getItem(userEmail);
    if(hasAuthenticated){
        next()
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
