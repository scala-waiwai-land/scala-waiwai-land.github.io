import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '誰にでも開かれたコミュニティ',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Scalaわいわいランドでは、ROM専を含めた広い利用者が安心してScalaについて質問・雑談・議論することを目指しています。
      </>
    ),
  },
  {
    title: 'Keep Opened',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Scalaわいわいランドはインターネットに価値を還元します。
        Discord上での会話は<Link href="https://www.linen.dev/s/scala-waiwai-land">オープンなアーカイブ</Link>として保存され、
        インターネット上から検索可能な形でいつでも参照できます。
      </>
    ),
  },
  {
    title: 'We are official!',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Link href="https://www.scala-lang.org/community/">Scala公式ページ</Link>で日本のコミュニティとしてリンクされている唯一のコミュニティです。
        言語やライブラリへのコントリビュータも多数参加しています。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
