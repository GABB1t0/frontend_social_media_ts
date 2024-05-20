import styleSection from './SectionSeparator.module.css';

interface SectionSeparatorProps {
  section : string

}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({section}) => {
  return(
    <>
      <div className={styleSection.separator_container}>
        <p>{section}</p>
        <a href="">Load More</a>
      </div>
    </>
  );
};

export default SectionSeparator;