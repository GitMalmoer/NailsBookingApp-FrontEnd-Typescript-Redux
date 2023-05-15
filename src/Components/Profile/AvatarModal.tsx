import React, { useEffect, useState } from 'react'
import apiResponse from '../../Interfaces/apiResponse';
import { useChangeProfilePicMutation, useGetAllAvatarsQuery } from '../../API/authApi';
import { userModel } from '../../Interfaces';
import avatarModel from '../../Interfaces/avatarModel';
import { MiniLoader } from '../Common';

interface Props{
    userDataId : string,
}

function AvatarModal(props:Props) {
    const [changeProfilePic] = useChangeProfilePicMutation();
    const {data,isLoading} = useGetAllAvatarsQuery(null);
    const [avatarList, setAvatarsList] = useState<avatarModel[]>([]);
    const {userDataId} = props
    console.log(userDataId);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(data && !isLoading){
            setAvatarsList(data?.result);
        }
    },[data])

    const ProfilePicChange = async (avatarId : number) => {
        setLoading(true);
        const response : apiResponse = await changeProfilePic({
          userId: userDataId,
          avatarId:avatarId,
        });
        setLoading(false);
    }

  return (
    <div>
        {/* <!-- Button trigger modal --> */}
    <button type="button" className="badge rounded-pill text-bg-primary mt-1 border-2" disabled={loading} data-bs-toggle="modal" data-bs-target="#exampleModal">
    {loading ? <>Changing Picture...</> : <>Change Profile Picture</>}
    </button>
    
    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Select Avatar</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className='row'>
                {avatarList.map((avatar:avatarModel) => {
                    return <div className='col-3 my-1'><button data-bs-dismiss="modal" style={{border:"none", background:"transparent"}} onClick={() => ProfilePicChange(avatar.id)}><img src={avatar.path} style={{borderRadius:"50%"}}/></button></div>
                })}

            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div></div>
  )

}
export default AvatarModal