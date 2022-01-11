import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps, StyleguideSpecimenFields } from 'lib/component-props';

type StyleguideComponentParamsProps = StyleguideComponentProps & StyleguideSpecimenFields & {
    fields: {
        MainHeading: Field<string>
    }
}

const SimpleComponent = (props: StyleguideComponentParamsProps): JSX.Element => (
    <div>
        <Text className="text-3xl font-bold underline" field={props.fields.MainHeading} tag="h2"/>
    </div>
);

export default SimpleComponent;