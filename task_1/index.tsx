import { Component, memo, PureComponent } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

export const FirstComponent = memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

const SecondComponent = memo(({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
), (prevProps, nextProps) => {
    return prevProps.user.name === nextProps.user.name && prevProps.user.age === nextProps.user.age;
});

export class ThirdComponent extends PureComponent<IUser> {
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(nextProps: IProps) {
        return nextProps.user.name !== this.props.user.name || nextProps.user.age !== this.props.user.age;
    }

    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}