const { ObjectId } = require("mongodb");
const { getDb } = require("./db");

async function createSuccessStory(_, { petName, description, petPhotoUrl }) {
  try {
    const db = getDb();
    const newSuccessStory = await db.collection("successStories").insertOne({
      petName,
      description,
      petPhotoUrl,
    });

    console.log(
      "Success story inserted successfully",
      newSuccessStory.insertedId
    );

    const insertedSuccessStory = await db.collection("successStories").findOne({
      _id: newSuccessStory.insertedId,
    });

    // Transform MongoDB _id to GraphQL id
    insertedSuccessStory.id = insertedSuccessStory._id.toString();
    delete insertedSuccessStory._id;

    return insertedSuccessStory;
  } catch (err) {
    console.error("Error in success story insert:", err);
    throw err;
  }
}

// Fetch all success stories function
const getSuccessStories = async () => {
  try {
    const db = getDb();
    console.log("Connecting to the database...");

    const successStories = await db
      .collection("successStories")
      .find({})
      .toArray();

    console.log("Fetched success stories:", successStories);
    console.log("Number of success stories fetched:", successStories.length);

    if (successStories.length === 0) {
      console.log("No success stories found in the database.");
      return [];
    }

    // Transform _id to id for each success story
    const successStoriesWithId = successStories.map((story) => {
      story.id = story._id.toString();
      delete story._id;
      return story;
    });

    return successStoriesWithId;
  } catch (err) {
    console.error("Error fetching success stories:", err);
    throw err;
  }
};

// Export modules
module.exports = {
  createSuccessStory,
  getSuccessStories,
};
