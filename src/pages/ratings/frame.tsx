import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import css from './style.module.css';
import TextArea from './textarea';
import { UserContext } from '../../hook/useAuth';
import { ADD_FEEDBACK } from '../../Mutations/Ratings';

/* Message props */
type messageProps = {
  mine?: boolean;
  content: string;
};

/* Message component */
/* istanbul ignore next */
function Message({ mine = false, content }: messageProps) {
  return (
    <div className={mine ? css.div_wrapper : css.frame_wrapper}>
      <div
        className={
          mine
            ? `${css.div_10} bg-blue-200 dark:bg-blue-600`
            : `${css.div_9} bg-neutral-200 dark:bg-slate-500`
        }
      >
        <p className={css.text_wrapper_4}>{content}</p>
      </div>
    </div>
  );
}

/* frame props */
type props = {
  rows: any;
  allFeeds: any[];
};

/* frame props */
export default function Frame({ rows, allFeeds }: props) {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const [feed, setFeed] = useState('');

  /* istanbul ignore next */
  const [addFeedBack] = useMutation(ADD_FEEDBACK, {
    onError: (err) => {
      toast.error(err.message || 'something went wrong');
    },
    onCompleted: () => {
      toast.success('feedback sent!');
    },
  });

  /* istanbul ignore next */
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addFeedBack({
      variables: {
        sprint: `${rows.sprint}`,
        user: rows.id,
        content: feed,
      },
    }).then(() => {
      setFeed('');
      (e.target as HTMLFormElement).reset();
    });
  };

  return (
    <div className={css.frame}>
      <div className={css.text_wrapper}>
        <h2>{rows.username}</h2>
        <small>{rows.user}</small>
        {/* <span>{t('Remarking Conversation')}</span> */}
      </div>
      <form className={css.div} onSubmit={submit}>
        <div className={css.div_3}>
          <div className={css.div_4}>
            <div className={css.text_wrapper_2}>{t('Quality')}</div>
            <div className={css.div_5}>{rows.qualityremark}</div>
          </div>
          <div className={css.div_4}>
            <div className={css.text_wrapper_2}>{t('Quantity')}</div>
            <div className={css.div_5}>{rows.quantityremark}</div>
          </div>
          <div className={css.div_4}>
            <div className={css.text_wrapper_2}>{t('Professional Skills')}</div>
            <div className={css.div_5}>{rows.professionalRemark}</div>
          </div>
        </div>

        <div className={`${css.div_8} bg-stone-100 dark:bg-slate-700`}>
          <div className={css.messages}>
            {allFeeds.length === 0 ? (
              <p className={css.center_msg}>add a feedback</p>
            ) : (
              allFeeds.map((msg: any) => (
                <Message
                  key={`${msg?.createdAt}_${msg?.content}`}
                  mine={msg?.sender?.email === user?.email}
                  content={msg?.content}
                />
              ))
            )}
          </div>
        </div>
        <div className={css.div_11}>
          <TextArea
            resize="none"
            onChange={(e) => {
              setFeed(e.target.value);
            }}
            minHeight="auto"
            className={`${css.div_wrapper_2} bg-stone-100 dark:bg-slate-700`}
            placeholder={t('Type a message')}
          />
          <button type="submit" className={`${css.close_2} bg-blue-600 `}>
            <div className={`${css.text_wrapper_4} text-white`}>Send</div>
          </button>
        </div>
      </form>
    </div>
  );
}
