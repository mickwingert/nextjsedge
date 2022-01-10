import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';

type SimpleComponentProps = {
    fields: {
        MainHeading: Field<string>
    }
}

const SimpleComponent = (props: SimpleComponentProps): JSX.Element => (
    <div>
        <Text field={props.fields.MainHeading} />
    </div>
);

export default SimpleComponent;