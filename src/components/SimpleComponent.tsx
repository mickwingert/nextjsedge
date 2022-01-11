import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';

type SimpleComponentProps = {
    fields: {
        MainHeading: Field<string>
    }
}

const SimpleComponent = (props: SimpleComponentProps): JSX.Element => (
    <div>
        <Text className="text-3xl font-bold underline" field={props.fields.MainHeading} tag="h2"/>
    </div>
);

export default SimpleComponent;