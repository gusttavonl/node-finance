module.exports = {
  parserOpts: {
    headerPattern:
      /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s((\w*))/,
    headerCorrespondence: ['type', 'subject'],
  },
};
