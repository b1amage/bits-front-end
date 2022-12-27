import Image from "components/utilities/image/Image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillTrashFill, BsPenFill } from "react-icons/bs";
import daysDifference from "helper/dateDiff";
import ReactDOM from "react-dom";
import Input from "components/utilities/form/Input";
import Button from "components/utilities/button/Button";
import { useState } from "react";

const Modal = ({ closeModal, onUpdate, id, oldContent, quickSet }) => {
  const [content, setContent] = useState(oldContent);
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-30 z-[999] flex items-center justify-center !overflow-hidden">
      <div className="w-[500px] bg-white h-[300px] rounded-lg p-8 flex flex-col gap-10">
        <Input
          onChange={(e) => setContent(e.target.value)}
          fluid
          label="Edit comment"
          required
          name="content"
          type="text"
          value={content}
        />
        <div className="flex justify-between gap-3 mt-5">
          <Button
            primary
            onClick={() => {
              quickSet(content);
              onUpdate({ commentId: id, content });

              closeModal();
            }}
          >
            Submit
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

const CommentCard = ({ comment, onLike, onDelete, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  console.log(comment);
  let { heartCount = 0, content, user, createdAt } = comment;
  const { avatar, username, _id } = user;
  const [temp, setTemp] = useState(content);
  var currentDate = new Date();
  var createdDate = !createdAt ? new Date() : new Date(createdAt);

  const dateDiff = daysDifference(currentDate, createdDate);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const likes = comment.likes;
  const idLikes = likes?.length > 0 ? likes.map((item) => item.user._id) : [];

  const liked = idLikes.includes(currentUser.userId);
  const closeModal = () => {
    setShowModal(false);
  };

  const quickSet = (content) => setTemp(content);
  return (
    <div className="flex flex-col gap-5 px-5 py-8 border rounded-lg shadow-md border-secondary-50 md:gap-6">
      <div className="flex">
        <div className="flex items-center flex-1 gap-5 md:gap-8">
          <Image
            src={avatar || currentUser.avatar}
            className="w-[50px] h-[50px] !rounded-full"
          />
          <div>
            <p className="font-bold text-primary-100">
              {username || user.name || currentUser.name}
            </p>
            <p className="text-secondary-100">{dateDiff}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {currentUser.userId === _id && (
            <>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <BsPenFill />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  onDelete(comment._id);
                }}
              >
                <BsFillTrashFill />
              </div>
            </>
          )}

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              console.log(comment);
              onLike(comment._id, liked);
            }}
          >
            <p>{heartCount}</p>
            {liked ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <AiOutlineHeart />
            )}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <p className="text-base lg:text-lg">{temp}</p>
      </div>
      {showModal && (
        <Modal
          closeModal={closeModal}
          onUpdate={onUpdate}
          id={comment._id}
          oldContent={content}
          quickSet={quickSet}
        />
      )}
    </div>
  );
};

export default CommentCard;
