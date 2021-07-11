import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import { Card, CardBody, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap'
import toastr from 'toastr'
import { Confirm } from 'reactstrap-alert'
import { getRelativeTime } from '../Common/time'
import PollBody from './PollBody'

const PollCard = ({ poll, authUser, editPollHandler }) => {
    const [deletePollMutate] = useMutation(DELETE_POLL_MUTATION, {
        onCompleted: deletePollCompleteHandler,
    })

    const deletePollHandler = async () => {
        const answer = await Confirm({
            message: 'Do you really want to delete this Poll?',
            title: 'Delete Confirmation',
            confirmText: 'Yes',
            cancelText: 'No',
        })
        if (answer) {
            deletePollMutate({
                variables: {
                    pollId: poll._id,
                },
            })
        }
    }

    return (
        <Card key={poll._id}>
            <CardBody>
                <Row className="media align-items-center mb-4">
                    <Link to={'/profile/' + poll.author?.userUrlId}>
                        <img className="avatar-xs img-thumbnail rounded-circle mr-2" src={poll.author?.imageUrl} alt="" />
                    </Link>
                    <div className="media-body align-items-center">
                        <Link to={'/profile/' + poll.author?.userUrlId} className="text-muted font-size-10 mb-0">
                            {poll.author?.name}
                        </Link>
                        <p className="text-muted font-size-10 mb-0">{getRelativeTime(poll.modifiedDate)}</p>
                    </div>
                    {authUser && authUser._id === poll.author?._id && (
                        <UncontrolledDropdown className="float-right mr-1">
                            <DropdownToggle href="#" className="card-drop" tag="i">
                                <i className="mdi mdi-dots-horizontal font-size-18"></i>
                            </DropdownToggle>
                            <DropdownMenu right>
                                {editPollHandler && <DropdownItem onClick={editPollHandler}>Edit</DropdownItem>}
                                <DropdownItem onClick={deletePollHandler}>Delete</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    )}
                </Row>

                <div className="media mb-2">
                    <div className="media-body">
                        <PollBody authUser={authUser} poll={poll} key={poll._id} />
                        <div>
                            {poll?.tags?.map((tag, index) => (
                                <Link to="#" className="badge badge-light font-size-11 mr-1" key={index}>
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export const DELETE_POLL_MUTATION = gql`
    mutation deletePoll($pollId: String!) {
        deletePoll(pollId: $pollId) {
            success
            message
        }
    }
`

const deletePollCompleteHandler = (result) => {
    if (result.deletePoll.success) {
        toastr.success('Poll successfully deleted.')
    } else {
        toastr.error('Poll delete failed.')
    }
}

export default PollCard
