import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { GET_FOODS } from "@/graphql/queries";
import { CREATE_FOOD } from "@/graphql/mutations";
// 
// 
const AddFood = () => {
// 
  const [file, setFile] = useState<File>();
  const [imageURL, setImageURL] = useState<string>();
  const [createNewFood] = useMutation(CREATE_FOOD, {
    onCompleted(data) {
      console.log("mutation completed data", data);
    },
    onError(error) {
      console.log("error after executing mutation", error);
    },
    refetchQueries: [{ query: GET_FOODS }],
  });
  let tagsArray: number[] = [];
// 
// 
    return (
      <form
        onSubmit={async (e) => {
          e.preventDefault();
// 
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
// 
          const formJson: any = Object.fromEntries(formData.entries());
          formJson.price = parseInt(formJson.price);
          formJson.tags = tagsArray;
          formJson.imgUrl = imageURL;
          console.log("formjson", formJson);
          const result = await createNewFood({
            variables: {
              data: formJson,
            },
          });
          console.log("result", result);
        }}
      >
        <div>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
          <button
            onClick={async (event) => {
              event.preventDefault();
              if (file) {
                const url = "/img";
                const formData = new FormData();
                formData.append("file", file, file.name);
                try {
                  const response = await axios.post(url, formData);
                  setImageURL(response.data.filename);
                } catch (err) {
                  console.log("error", err);
                }
              } else {
                alert("select a file to upload");
              }
            }}
          >
            Upload Image
          </button>
          {imageURL ? (
            <>
              <br />
              <img width={"500"} alt="uploadedImg" src={imageURL} />
              <br />
            </>
          ) : null}
          <button
            onClick={() => {
              console.log("post this to backend: " + imageURL);
            }}
          >
            Add new image
          </button>
        </div>
        <label>
          Titre de l&apos;annonce: <br />
          <input className="text-field" name="title" />
        </label>
        <br />
    //  
        <button className="button">Submit</button>
      </form>
    );
  }
;
export default AddFood;
